import { FC, useEffect, useState } from "react";

import "./style.scss";
import Input from "./UI/Input";
import Textarea from "./UI/Textarea";
import List from "./UI/List";
import Card from "../../components/Card";
import { TListItemWork } from "../../types/work";
import { useTypeDispatch } from "../../hooks/useTypeDispatch";
import { postWork } from "../../store/Slice/WorksSlice/asyncActions";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { Status } from "../../types/Status";
import { setDefaultLoading } from "../../store/Slice/WorksSlice";
const Admin: FC = () => {
  const { loadingPost } = useTypeSelector((state) => state.works);
  const dispatch = useTypeDispatch();

  const [title, setTitle] = useState<string>("Название");
  const [img, setImg] = useState<string>("Превью");
  const [type, setType] = useState<string>("Тип");
  const [description, setDesc] = useState<string>("Описание");
  const [list, setList] = useState<TListItemWork[]>([]);
  const [url, setUrl] = useState<string>("Ссылка");
  const [urlGit, setUrlGit] = useState<string>("GitHub");

  const postWorkHandler = () => {
    dispatch(
      postWork({
        id: String(Math.random() * 300) + title,
        title,
        img,
        type,
        description,
        list,
        url,
        urlGit,
      })
    );
  };

  useEffect(() => {
    if (loadingPost === Status.SUCCESS) {
      setTitle("Название");
      setImg("Превью");
      setType("Тип");
      setDesc("Описание");
      setList([]);
      setUrl("Ссылка");
      setUrlGit("GitHub");
    }
    dispatch(setDefaultLoading());
  }, [loadingPost]);

  return (
    <div className="admin-page">
      <div className="title title_main __anim-item __active">
        <div className="title__text">
          <h2 className="anim-show_right">Админка</h2>
        </div>
      </div>
      <div className="admin-page__main">
        <div className="admin-form">
          <div>
            <Input setState={setTitle} name="Название работы:" />
            <Input setState={setType} name="Тип Работы:" />
            <Input
              setState={setImg}
              name="Превью работы:"
              classes={["admin-form__img "]}
            />
            <Input setState={setUrl} name="Ссылка на работу:" />
            <Input setState={setUrlGit} name="Ссылка на GitHub:" />
          </div>
          <div>
            <Textarea setState={setDesc} name="Описание Работы:" />
          </div>
          <div>
            <List setState={setList} />
          </div>
        </div>
        <button className="add-work" onClick={postWorkHandler}>
          Добавить работу
        </button>
        <div className="portfolio__content portfolio_child-center __active">
          <Card
            card={{
              title,
              img,
              description,
              type,
              urlGit,
              url,
              list,
              id: title,
            }}
            classes={["__active"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Admin;
