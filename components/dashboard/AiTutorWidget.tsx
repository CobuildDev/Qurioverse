import Link from "next/link";
import Image from "next/image";

export function AiTutorWidget() {
  return (
    <div className="card-3d bg-white p-5 border-2 border-b-6 border-slate-200 flex items-center gap-4">
      <div className="w-14 h-14 relative shrink-0 bg-brand-soft-purple rounded-2xl flex items-center justify-center border border-purple-200/50">
        <div className="w-10 h-10 relative">
          <Image src="/images/quiro.png" fill alt="Quiro" className="object-contain" />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="font-extrabold text-sm text-brand-slate">Stuck on a concept?</h3>
        <p className="text-[10px] text-slate-400 font-medium">Chat with Quiro for funny analogies!</p>
        <Link href="/tutor" className="inline-block mt-2">
          <span className="text-[10px] font-black uppercase text-brand-purple hover:underline">
            Start Chat &rarr;
          </span>
        </Link>
      </div>
    </div>
  );
}
