export interface SkillProgressProps {
    level: number; // 0-100
  }

  export function SkillProgress({ level }: SkillProgressProps) {
    return (
      <div className="relative w-24 md:w-32 lg:w-40 h-2 bg-gray-200 rounded-full">
        <div
          className="absolute left-0 top-0 h-2 bg-gray-900 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    );
  }
