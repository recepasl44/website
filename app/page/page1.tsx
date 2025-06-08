import type { NextPage } from "next";
import { TextField, Button } from "@mui/material";
import FrameComponent from "../../components/frame-component2";
import ContactSection from "../../components/ContactSection";
import styles from "./page.module.css";

const Page: NextPage = () => {
  return (
    <div className={styles.page}>
      <FrameComponent
        frameDivWidth="unset"
        frameDivAlignSelf="stretch"
        itemsContainerHeight="1.5rem"
        sorularnzInBuradayzWidth="unset"
        sorularnzInBuradayzDisplay="unset"
        bizimleLetiimeGeinWidth="unset"
        bizimleLetiimeGeinDisplay="unset"
      />
      <main className={styles.frameParent}>
        <ContactSection />
        <div className={styles.mesajGnder}>
          <h3 className={styles.letiimBilgilerimiz}>Mesaj Gönderin</h3>
          <section className={styles.bilgiler1}>
            <div className={styles.s}>
              <div className={styles.adSoyad}>Ad Soyad</div>
              <TextField
                className={styles.informationInputs}
                color="primary"
                variant="standard"
                sx={{ "& .MuiInputBase-root": { height: "40px" } }}
              />
            </div>
            <div className={styles.s}>
              <div className={styles.adSoyad}>E-Posta</div>
              <TextField
                className={styles.informationInputs}
                color="primary"
                variant="standard"
                sx={{ "& .MuiInputBase-root": { height: "40px" } }}
              />
            </div>
            <div className={styles.s}>
              <div className={styles.adSoyad}>Telefon</div>
              <TextField
                className={styles.informationInputs}
                color="primary"
                variant="standard"
                sx={{ "& .MuiInputBase-root": { height: "40px" } }}
              />
            </div>
            <div className={styles.s}>
              <div className={styles.adSoyad}>Kurum Adı</div>
              <TextField
                className={styles.informationInputs}
                color="primary"
                variant="standard"
                sx={{ "& .MuiInputBase-root": { height: "40px" } }}
              />
            </div>
            <div className={styles.s}>
              <div className={styles.adSoyad}>Mesaj</div>
              <TextField
                className={styles.frameTextfield}
                color="primary"
                variant="standard"
                multiline
              />
            </div>
          </section>
          <div className={styles.mesajGnderInner}>
            <Button
              className={styles.frameChild}
              disableElevation
              color="primary"
              variant="contained"
              sx={{ borderRadius: "0px 0px 0px 0px" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
