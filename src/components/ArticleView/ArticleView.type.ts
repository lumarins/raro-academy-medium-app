import { ArticleThumbnailProps } from "../ArticleThumbnail/ArticleThumbnail.types";

export type ArticleViewProps = {
  article: ArticleThumbnailProps;
  autor?: {
    nome: string;
    avatar: string;
  };
  dataPublicacao?: Date;
  tempoLeitura?: string;
}