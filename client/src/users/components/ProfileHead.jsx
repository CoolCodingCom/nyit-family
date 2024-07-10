import backArrowImg from "../../assets/backArrow.svg";

export default function ProfileHead() {
  return (
    <div className="middlecol__head profile__head">
      <div className="profile__head__back">
        <img src={backArrowImg} alt="Back arrow" className="back__button" />
      </div>

      <div className="profile__head__info">
        <div className="profile__name">Levi Zhu</div>
        <div className="posts__info">46.1k posts</div>
      </div>
    </div>
  );
}
