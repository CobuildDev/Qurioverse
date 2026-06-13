const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../qurioverse lesson content.md'), 'utf-8');

const units = [];
let currentUnit = null;
let currentLesson = null;
let currentSection = null;

const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;

  // Match Unit Header: # UNIT 1 — Title
  const unitMatch = line.match(/^# UNIT (\d+) — (.+)$/);
  if (unitMatch) {
    currentUnit = {
      id: parseInt(unitMatch[1]),
      title: unitMatch[2].trim(),
      lessons: []
    };
    units.push(currentUnit);
    currentLesson = null;
    continue;
  }

  // Match Lesson Header: ## Unit X · Lesson Y — Title
  const lessonMatch = line.match(/^## Unit (\d+) · Lesson (\d+) — (.+)$/);
  if (lessonMatch) {
    currentLesson = {
      id: parseInt(lessonMatch[2]),
      unitId: parseInt(lessonMatch[1]),
      globalId: parseInt(lessonMatch[1]) * 100 + parseInt(lessonMatch[2]),
      title: lessonMatch[3].trim(),
      location: '',
      era: '',
      story: [],
      quote: '',
      scientist: '',
      simulation: { brief: '', type: '', discoveryOutcome: '' },
      reflection: { question: '', correctInsight: '' },
      summaryPoints: []
    };
    currentUnit.lessons.push(currentLesson);
    currentSection = null;
    continue;
  }

  if (!currentLesson) continue;

  if (line.startsWith('**Location:**')) {
    currentLesson.location = line.replace('**Location:**', '').trim();
    continue;
  }
  if (line.startsWith('**Era:**')) {
    currentLesson.era = line.replace('**Era:**', '').trim();
    continue;
  }

  if (line === '### Story') { currentSection = 'story'; continue; }
  if (line === '### Simulation') { currentSection = 'simulation'; continue; }
  if (line === '### Reflection') { currentSection = 'reflection'; continue; }
  if (line === '### Summary Points') { currentSection = 'summaryPoints'; continue; }

  if (currentSection === 'story') {
    if (line.startsWith('**Quote:**')) {
      currentLesson.quote = line.replace('**Quote:**', '').replace(/^"|"$/g, '').trim();
    } else if (line.startsWith('**Scientist:**')) {
      currentLesson.scientist = line.replace('**Scientist:**', '').trim();
    } else if (line.startsWith('- ')) {
      // scientist bullet points
      currentLesson.scientist += '\n' + line;
    } else {
      currentLesson.story.push(line);
    }
  } else if (currentSection === 'simulation') {
    if (line.startsWith('**Brief:**')) {
      currentLesson.simulation.brief = line.replace('**Brief:**', '').trim();
    } else if (line.startsWith('**Type:**')) {
      currentLesson.simulation.type = line.replace('**Type:**', '').trim();
    } else if (line.startsWith('**Discovery Outcome:**')) {
      currentLesson.simulation.discoveryOutcome = line.replace('**Discovery Outcome:**', '').trim();
    } else {
      // sometimes brief spans multiple lines?
      if (!line.startsWith('**')) {
        currentLesson.simulation.brief += '\n' + line;
      }
    }
  } else if (currentSection === 'reflection') {
    if (line.startsWith('**Question:**')) {
      currentLesson.reflection.question = line.replace('**Question:**', '').trim();
    } else if (line.startsWith('**Correct Insight:**')) {
      currentLesson.reflection.correctInsight = line.replace('**Correct Insight:**', '').trim();
    } else {
      if (!line.startsWith('**') && currentLesson.reflection.question && !currentLesson.reflection.correctInsight) {
         currentLesson.reflection.question += '\n' + line;
      } else if (!line.startsWith('**') && currentLesson.reflection.correctInsight) {
         currentLesson.reflection.correctInsight += '\n' + line;
      }
    }
  } else if (currentSection === 'summaryPoints') {
    if (line.startsWith('- ')) {
      currentLesson.summaryPoints.push(line.replace('- ', '').trim());
    }
  }
}

// Cleanup story array (remove trailing/leading empty lines)
units.forEach(u => {
  u.lessons.forEach(l => {
    l.story = l.story.join('\n\n').trim();
  });
});

fs.writeFileSync(path.join(__dirname, '../data/curriculum.json'), JSON.stringify(units, null, 2));
console.log('Curriculum parsed successfully. Found', units.length, 'units and', units.reduce((acc, u) => acc + u.lessons.length, 0), 'lessons.');
