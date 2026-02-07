import "../../styles/components/banner.scss";
import Star from './Star.tsx';

type Props = {
  color?: string;
};

function Banner({ color = "" }: Props) {
  return (
    <div className={`banner ${color}`}>
      <h5>Start met groeien</h5>
      <Star />
      <h5>Start met stralen</h5>
      <Star />
      <h5>Start met groeien</h5>
      <Star />
      <h5>Start met stralen</h5>
      <Star />
      <h5>Start met groeien</h5>
      <Star />
      <h5>Start met stralen</h5>
      <Star />
      <h5>Start met groeien</h5>
      <Star />
      <h5>Start met stralen</h5>
      <Star />
      <h5>Start met groeien</h5>
      <Star />
      <h5>Start met stralen</h5>
      <Star />
    </div>
  );
}

export default Banner;
