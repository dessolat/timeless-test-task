import cl from './SideStatistics.module.scss';

type Props = {
  ageGroups: Record<string, number>;
};
function AgeGroups({ ageGroups }: Props) {
  return (
    <div>
      <p className={cl.subTitle}>Age Groups</p>
      <ul>
        {Object.entries(ageGroups).map(([key, value]) => (
          <li key={key} className={cl.criteria}>
            <div className={cl.criteriaTitle}>{key}</div>
            <div className={cl.criteriaValue}>
              {value} {value !== 1 ? 'users' : 'user'}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default AgeGroups;
