import React from "react";
import "../linkList/linkList.css";
import ButtonList from "../buttonList/buttonList";

const linkList = () => {
  const buttons = [
    {
      label: "ALFABETO",
      link: "https://drive.google.com/drive/folders/1mRpHQ9Bzkdzd5sBkK57Q7USukRLrYkvF?usp=sharing",
    },
    {
      label: "AMIZADE",
      link: "https://drive.google.com/drive/folders/1CnBJA1EnYSqqlNGnvRmcgwliyNy1E8Qd?usp=drive_link",
    },
    {
      label: "AMOR",
      link: "https://drive.google.com/drive/folders/1Hv3xAaH1O2JFP0A0l_qVyWdWoEpQFH3d?usp=drive_link",
    },
    {
      label: "ANIMES",
      link: "https://drive.google.com/drive/folders/1GhN6HuBx2gxZqYgoKR5myCLwlti-xzZN?usp=drive_link",
    },
    {
      label: "ANIVERSARIO",
      link: "https://drive.google.com/drive/folders/1qvDBRWF7tYvTyt5cTUXT_w8jnJ3ME0jh?usp=drive_link",
    },
    {
      label: "ANJOS",
      link: "https://drive.google.com/drive/folders/1_AZxtioULmbrbKWkg9zh-SDCDadcAEba?usp=drive_link",
    },
    {
      label: "ARMADURAS",
      link: "https://drive.google.com/drive/folders/1ti2IAnpy4bOZPs0vbwylNg0broihZVLt?usp=drive_link",
    },
    {
      label: "AUTISMO",
      link: "https://drive.google.com/drive/folders/1KR7fifwfzp7gBZGrOFOVqyxdhGHxxtV3?usp=drive_link",
    },
    {
      label: "AVÓS",
      link: "https://drive.google.com/drive/folders/149BGETPtLRX7MNzq5gyq3SspZN6fIEJ9?usp=drive_link",
    },
    {
      label: "BANDEIRAS",
      link: "https://drive.google.com/drive/folders/1S4HmbgOxMzIcC5skd3b71Wq-mwBmPYYY?usp=drive_link",
    },
    {
      label: "BASQUETE",
      link: "https://drive.google.com/drive/folders/1CYXXHkXgjQqZdR1repTIrDgtXotH0fxA?usp=drive_link",
    },
    {
      label: "BATIZADO",
      link: "https://drive.google.com/drive/folders/1c-hEH2Q7gDZx6KkVDByjz6WFY-gJZIMU?usp=drive_link",
    },
    {
      label: "CARNAVAL",
      link: "https://drive.google.com/drive/folders/1kRvF90CsKTC8pWCmGg16WiJBMiUmD6PQ?usp=drive_link",
    },
    {
      label: "CARROS",
      link: "https://drive.google.com/drive/folders/1c8ADJFm2HvRLF_WDp0B9stTpyWxzwKZt?usp=drive_link",
    },
    {
      label: "CERVEJAS",
      link: "https://drive.google.com/drive/folders/1R1unSmXJpyR3XsKvHlEq6SGKwcBDb37L?usp=drive_link",
    },
    {
      label: "CHOCOLATE",
      link: "https://drive.google.com/drive/folders/1dUG9i_svSfLH8Zx0Mu5t8eB4_p42P0EW?usp=drive_link",
    },
    {
      label: "COM CAFÉ - SEM CAFÉ",
      link: "https://drive.google.com/drive/folders/1elEuhqRLQm6P2rYCyD0bPI8KP1oS69QO?usp=drive_link",
    },
    {
      label: "DESENHOS ANIMADOS",
      link: "https://drive.google.com/drive/folders/1OnMnpbYa2qiUUwQ2CzY4vq1sr0qwG21H?usp=drive_link",
    },
    {
      label: "DIAS DAS MAES",
      link: "https://drive.google.com/drive/folders/1wjAAcr-9NWstyGMB4aCKAeHo4OpjkUFo?usp=drive_link",
    },
    {
      label: "DIVERSAS",
      link: "https://drive.google.com/drive/folders/15BrFssjqcb2X7YszK409RNN-WSxhZXEJ?usp=drive_link",
    },
    {
      label: "EDITÁVEIS CORELDRAW",
      link: "https://drive.google.com/drive/folders/1Tve7GheubdsTLrwrc01_CFNrdajfXg9H?usp=drive_link",
    },
    {
      label: "ENGRAÇADAS",
      link: "https://drive.google.com/drive/folders/1X7EySmwRy38fXBAebGQg3C_MGBCD6a-M?usp=drive_link",
    },
    {
      label: "ESPORTES",
      link: "https://drive.google.com/drive/folders/1Amu9W3Bv4TBvge7lk4hslbXzHmr7RrDn?usp=drive_link",
    },
    {
      label: "ESTAMPAS E FUNDOS",
      link: "https://drive.google.com/drive/folders/1-WpWjZmUvDWfxM1s78WanwLTapXUrVg6?usp=drive_link",
    },
    {
      label: "FANTASY",
      link: "https://drive.google.com/drive/folders/1WEGjyAwycvuKTbTgIs_4GEnr_y2BrzD8?usp=drive_link",
    },
    {
      label: "FILMES E SÉRIES",
      link: "https://drive.google.com/drive/folders/1elvR6IDSew7Fb1pLpj9HilxaowpHLdpx?usp=drive_link",
    },
    {
      label: "FLORK",
      link: "https://drive.google.com/drive/folders/1uSnyi9DHpg5lJVhhnslC9ynMKpzZkP9e?usp=drive_link",
    },
    {
      label: "FUNKO",
      link: "https://drive.google.com/drive/folders/1bXmVvPHWxVSfdT9Fvb5yDXA4SMqubFxj?usp=drive_link",
    },
    {
      label: "GAMES",
      link: "https://drive.google.com/drive/folders/14auI5KeI2TLBLmQ_hyNjCpHbTTKU-x8k?usp=drive_link",
    },
    {
      label: "GRAFICOS",
      link: "https://drive.google.com/drive/folders/1tEyxMABQPDuU1ZrFCAnwuxU8J-0Pj-Z5?usp=drive_link",
    },
    {
      label: "INFANTIL",
      link: "https://drive.google.com/drive/folders/1rOIKLnqUw5W7ageak6exDFsAT-iDtrIi?usp=drive_link",
    },
    {
      label: "MAQUIAGEM",
      link: "https://drive.google.com/drive/folders/1S0-Dm_2H-4ckwoIVZSAS_NUFyjQ_GPQi?usp=drive_link",
    },
    {
      label: "MARCAS",
      link: "https://drive.google.com/drive/folders/1Ry7s50M8u8azMkfmZs5quCvBOypJx_0Y?usp=drive_link",
    },
    {
      label: "MECÂNICA",
      link: "https://drive.google.com/drive/folders/1OnMZvAJ--vSsvyWPflj4LJvXvDnSDmj9?usp=drive_link",
    },
    {
      label: "MOCKUPS",
      link: "https://drive.google.com/drive/folders/1DxgCNaN0jIdzlVuxWfY9TVnuTITThHYG?usp=drive_link",
    },
    {
      label: "MUSICAS",
      link: "https://drive.google.com/drive/folders/1pw9wxiKHIVC3mFEebMcQuDeCAeVkqcV1?usp=drive_link",
    },
    {
      label: "NAMORADOS",
      link: "https://drive.google.com/drive/folders/1OODim7r4l2TDhGfgzQI2GVANGzM3Jf9s?usp=drive_link",
    },
    {
      label: "NATAL E ANO NOVO",
      link: "https://drive.google.com/drive/folders/11SjWQeg2IAh_DaBygVbFLuRqhDIaPY8d?usp=drive_link",
    },
    {
      label: "NOIVOS",
      link: "https://drive.google.com/drive/folders/1_6tICf5QEel4zu0OietUO2_wg_p-ehSX?usp=drive_link",
    },
    {
      label: "NOVEMBRO AZUL",
      link: "https://drive.google.com/drive/folders/1k_Z79SpRGceHMXoNpk8WL9m0xVYEOiXL?usp=drive_link",
    },
    {
      label: "PARA COLORIR",
      link: "https://drive.google.com/drive/folders/1qB1rfqqqNmZ9S1U1dhVsoi4OWW5f4E_L?usp=drive_link",
    },
    {
      label: "PACK CANECA 01",
      link: "https://drive.google.com/drive/folders/1rYVi7rKYQUfcMPS83revCXXCYk_d630d?usp=drive_link",
    },
    {
      label: "PACK CANECA 02",
      link: "https://drive.google.com/drive/folders/1yrf2LrWM9zFzfPJOVajeYllRSifOfVKX?usp=drive_link",
    },
  ];

  return (
    <div>
      <ButtonList buttons={buttons} />
    </div>
  );
};

export default linkList;
