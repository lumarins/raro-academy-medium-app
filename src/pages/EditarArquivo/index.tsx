/* src/pages/EditarArquivo/index.tsx */
import apiClient from '../../services/api-client'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleForm } from "../../components/ArticleForm";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";

export const EditarArquivoPage = () => {
  const [ artigo, setArtigo ] = useState<ArticleThumbnailProps>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      buscarArtigo();
    }
  }, [id]);

  const handleSubmit = async (artigo: ArticleThumbnailProps) => {
    if (artigo.id) {
      await apiClient.patch(`/artigos/${id}`, artigo);
    } else {
      await apiClient.post(`/artigos`, artigo);
    }
  }

  async function buscarArtigo() {
    const response = await apiClient.get<ArticleThumbnailProps>(
      `/artigos/${id}`,
    );
    setArtigo(response.data);
  }
  
  return (
    <>
      <div className="items-center justify-center m-10">
        <ArticleForm article={artigo} onSubmit={ handleSubmit } />
      </div>
    </>
  );
};