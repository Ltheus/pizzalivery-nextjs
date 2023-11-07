import styled from "./footer.module.css"

export const Footer = () => {
  return (
    <footer className={styled.footer}>
      <div className={styled.footerDiv}>
        <p>
          Terça, Quarta, Quinta e Domingo, 18hs30 às 23hs. Sexta e Sábado,
          18:30hs às 23hs30. (11) 2645 5782
        </p>
      </div>
    </footer>
  );
};
