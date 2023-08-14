"use client";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, FormControl, FormHelperText, IconButton, InputAdornment, OutlinedInput, TextField, Typography } from '@mui/material';
import Publicacao from './components/Publicacao';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NavBar from './components/NavBar';
import PublicacaoDialog from './components/PublicacaoDialog';
import { SetStateAction, useEffect, useState } from 'react';
import { get } from "../services/ApiRequest";
import { useRouter } from 'next/navigation';
import SearchIcon from '@mui/icons-material/Search';


export default function Home() {
  const [open, setOpen] = useState(false);
  const [publicacoes, setPublicacoes] = useState([]);
  const [pesquisa, setPesquisa] = useState("");


  const router = useRouter();

  if (localStorage.getItem("user") == "{}") {
    router.push("/login")
  }

  const getPublicacoes = async () => {
    const resp = await get("publicacao", {});
    setPublicacoes(resp);
  }

  useEffect(() => {
    getPublicacoes();
  }, [])

  const onClose = () => {
    getPublicacoes();
    setOpen(false)
  }

  const pesquisar = async () => {
    if (pesquisa == "") {
      const resp = await get("publicacao", {});
      setPublicacoes(resp);
    } else {
      const body: SetStateAction<never[]> = []
      body.push(publicacoes[0]);
      setPublicacoes(body);
    }

  }

  const changePesquisa = (valor: string) => {
    setPesquisa(valor);
  }

  return (
    <>
      <PublicacaoDialog open={open} onClose={() => { onClose() }} />
      <NavBar />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <FormControl sx={{ mt: 2, width: '50ch' }} variant="outlined" >
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<IconButton aria-label="delete" color="primary" onClick={pesquisar}>
              <SearchIcon />
            </IconButton>}
            aria-describedby="outlined-weight-helper-text"
            fullWidth
            value={pesquisa}
            onChange={(e) => { changePesquisa(e.target.value); }}
            sx={{ borderRadius: 4 }}
            size='small'
          />


        </FormControl>
        <Box sx={{ width: "70%" }}>
          {publicacoes.map((publicacao) => <Publicacao publicacao={publicacao} />)}
        </Box>


      </Box>


      <IconButton aria-label="delete" color='info' sx={{ position: 'fixed', bottom: 20, right: 30 }} onClick={() => { setOpen(true) }}>
        <AddCircleIcon style={{ fontSize: 60 }} />
      </IconButton>
    </>


  )
}
