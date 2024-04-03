import { FC, useEffect } from "react";
import Portfolio from "../../components/Portfolio";
import { Anim } from "../../assets/scripts/anim";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { useTypeDispatch } from "../../hooks/useTypeDispatch";
import { fetchWorks } from "../../store/Slice/WorksSlice/asyncActions";
import { Status } from "../../types/Status";

const Works: FC = () => {
  const { loading, items } = useTypeSelector((state) => state.works);
  const dispatch = useTypeDispatch();
  useEffect(() => {
    dispatch(fetchWorks({}));

    return () => {
      window.onscroll = null;
    };
  }, []);

  useEffect(() => {
    if (loading === Status.SUCCESS) {
      window.onscroll = null;
      const animItems = document.querySelectorAll(
        ".__anim-item"
      ) as NodeListOf<HTMLElement>;
      const anim = new Anim(animItems);
      window.onscroll = anim.startScroll.bind(anim);
    }
  }, [loading]);

  return (
    <div className="works-page">
      <Portfolio title="Портфолио" cards={items} />
    </div>
  );
};

export default Works;
