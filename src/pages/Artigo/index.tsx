/* src/pages/Artigo/index.tsx */
import faker from "@faker-js/faker";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import { ArticleView } from "../../components/ArticleView";
import apiClient from "../../services/api-client";

export const ArtigoPage = () => {
  const [article, setArticle] = useState<ArticleThumbnailProps>();
  const { id } = useParams();
  useEffect(() => {
    buscarArtigo();
  }, []);



  async function buscarArtigo() {
    const response = await apiClient.get<ArticleThumbnailProps>(
      `/artigos/${id}`,
    );
    setArticle(response.data);
  }

  return (
    <div className="m-10">
      { article && ( <ArticleView article={article} />) }
    </div>
  );
};
