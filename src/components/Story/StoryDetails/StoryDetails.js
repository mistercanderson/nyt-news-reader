import './StoryDetails.css';

export default function StoryDetails({ details }) {
  return (
    <div className='details-container'>
      <p>
        Story from the <strong>{details?.section}</strong> section
      </p>
      <p>{details?.abstract}</p>
      <a href={details?.link}>View full article</a>
      <img src={details?.imageUrl} alt={details?.imageCaption} />
      <p className='copyright'>© {details?.imageCopyright}</p>
    </div>
  );
}
