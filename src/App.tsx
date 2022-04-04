
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/Login';
import { Layout } from './components/Layout';
import { ArtigosPage } from './pages/Artigos';
import { MeusArtigosPage } from './pages/MeusArtigos';
import { ArtigoPage } from './pages/Artigo';
import { EditarArquivoPage } from './pages/EditarArquivo';
import { NotFoundPage } from './pages/NotFoundPage';


function App() {
/*App.tsx*/
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<ArtigosPage />} />
          <Route path="/artigo/:id" element={<ArtigoPage />} />
          <Route path="/artigos" element={<MeusArtigosPage />} />
          <Route path="/artigo/editar/:id" element={<EditarArquivoPage />} />
          <Route path="/artigos/novo" element={<EditarArquivoPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;