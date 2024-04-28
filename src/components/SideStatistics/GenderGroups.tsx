import cl from './SideStatistics.module.scss';

type Props = {
  genderGroups: Record<string, number>;
};
function GenderGroups({ genderGroups }: Props) {
  return (
    <div>
      <p className={cl.subTitle}>Gender Groups</p>
      <ul>
        {Object.entries(genderGroups).map(([key, value]) => (
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
export default GenderGroups;
