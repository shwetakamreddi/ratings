import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import './style.css';

interface IProps {
  data: Array<{ rating: number; count: number }>;
  filledStarColor?: string;
  FilledStarIcon?: React.ReactElement;
}

const FilledStar = (props: IProps) => {
  const { data, filledStarColor, FilledStarIcon } = props;
  const numberOfRating = Math.max(...data.map((data: any) => data.rating));
  const totalCount = data.reduce((acc: any, obj: any) => acc + obj.count, 0);
  const per: any = {};
  let totalPercentage = 0;
  let starPercentageRounded = '';

  data.forEach((rating: any) => {
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
    <div className="filled" style={{ width: starPercentageRounded }}>
      {data.map(() => {
        return (
          <span
            style={{ color: filledStarColor ? filledStarColor : '#ffa41c' }}
          >
            {FilledStarIcon ? FilledStarIcon : <AiFillStar />}
          </span>
        );
      })}
    </div>
  );
};

export default FilledStar;
