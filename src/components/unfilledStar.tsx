import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import FilledStar from './filledStar';
import './style.css';

interface IProps {
  data: Array<{ rating: number; count: number }>;
  unfilledStarColor?: string;
  filledStarColor?: string;
  FilledStarIcon?: React.ReactElement;
  UnfilledStarIcon?: React.ReactElement;
  className?: string;
}

const UnfilledStar = (props: IProps) => {
  const {
    data,
    unfilledStarColor,
    filledStarColor,
    UnfilledStarIcon,
    FilledStarIcon,
    className,
  } = props;
  return (
    <div className={className}>
      {data.map(() => {
        return (
          <span
            style={{ color: unfilledStarColor ? unfilledStarColor : '#ffa41c' }}
          >
            {UnfilledStarIcon ? UnfilledStarIcon : <AiOutlineStar />}
          </span>
        );
      })}

      <FilledStar
        data={data}
        filledStarColor={filledStarColor}
        FilledStarIcon={FilledStarIcon}
      />
    </div>
  );
};

export default UnfilledStar;
