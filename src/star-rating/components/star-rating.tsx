import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import UnfilledStar from './unfilledStar';
import './style.css';

interface IProps {
  data: Array<{ rating: number; count: number }>;
  className?: string;
  filledStarColor?: string;
  unfilledStarColor?: string;
  FilledStarIcon?: any;
  UnfilledStarIcon?: any;
  headerText?: Function;
  headerTextClassName?: string;
}

interface PercentageObj {
  [key: string]: number;
}

const StarRating = (props: IProps) => {
  const {
    data,
    filledStarColor = '#ffa41c',
    unfilledStarColor = '#ffa41c',
    FilledStarIcon = <AiFillStar />,
    UnfilledStarIcon = <AiOutlineStar />,
    className,
    headerText,
    headerTextClassName,
  } = props;

  const per: PercentageObj = {};
  let totalPercentage = 0;
  let starPercentageRounded = '';
  const totalCount = data.reduce((acc, obj) => acc + obj.count, 0);
  const numberOfRating = Math.max(...data.map((data) => data.rating));

  data.forEach((rating) => {
    const perOfIndividual = rating.count / totalCount;
    const key = `${rating.rating}`;
    per[key] = perOfIndividual;
  });

  for (const x in per) {
    totalPercentage += Number(x) * per[x];
  }
  const percentage =
    (Number(totalPercentage.toFixed(2)) / numberOfRating) * 100;
  starPercentageRounded = `${percentage}%`;

  return (
    <div className="star-wrapper">
      <UnfilledStar
        data={data}
        filledStarColor={filledStarColor}
        unfilledStarColor={unfilledStarColor}
        UnfilledStarIcon={UnfilledStarIcon}
        FilledStarIcon={FilledStarIcon}
        className={className}
      />
      {headerText?.(totalPercentage) || (
        <p className={headerTextClassName ? headerTextClassName : 'rating'}>
          {starPercentageRounded} out of {data.length}
        </p>
      )}
    </div>
  );
};

export default StarRating;
