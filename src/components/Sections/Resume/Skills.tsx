import {FC, memo, PropsWithChildren} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  const len = skills?.length;
  return (
    <div className="flex flex-col">
      <span className="text-sm sm:text-base font-bold">{name} :</span>
      <div className="flex flex-row gap-y-2 mt-1 gap-x-2">
        {skills.map((skill, index) => (
          <Skill isLast={index === len - 1} key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType, isLast: boolean}> = memo(({skill, isLast}) => {
  const {name} = skill;
  // const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);

  return (
    <div className="flex flex-col">
      <span className="ml-0 text-sm font-medium sm:text-base">{name}{isLast ? '.' : ','}</span>
      {/* <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
        <div className="h-full rounded-full bg-orange-400" style={{width: `${percentage}%`}} />
      </div> */}
    </div>
  );
});

Skill.displayName = 'Skill';
