"use client";
import type { NextPage } from "next";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import Image from "next/image";
import FrameComponent from "./frame-component2_contact";
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
        <section className={styles.bilgilerWrapper}>
          <div className={styles.bilgiler}>
            <h3 className={styles.letiimBilgilerimiz}>İletişim Bilgilerimiz</h3>
            <div className={styles.addressInfo}>
              <div className={styles.gridiconslocationParent}>
                <Image
                  className={styles.gridiconslocation}
                  loading="lazy"
                  width={24}
                  height={24}
                  sizes="100vw"
                  alt=""
                  src="/gridiconslocation.svg"
                />
                <div className={styles.adresKurumunAkContainer}>
                  <span>Adres:</span>
                  <span> Kurumun Açık Adresi (şehir / semt dahil)</span>
                </div>
              </div>
              <div className={styles.gridiconslocationParent}>
                <Image
                  className={styles.gridiconslocation}
                  loading="lazy"
                  width={24}
                  height={24}
                  sizes="100vw"
                  alt=""
                  src="/icroundphone.svg"
                />
                <div className={styles.adresKurumunAkContainer}>
                  <span>Telefon:</span>
                  <span> +90 5xx xxx xx xx</span>
                </div>
              </div>
              <div className={styles.gridiconslocationParent}>
                <Image
                  className={styles.gridiconslocation}
                  loading="lazy"
                  width={24}
                  height={24}
                  sizes="100vw"
                  alt=""
                  src="/fluentmail24filled.svg"
                />
                <div className={styles.adresKurumunAkContainer}>
                  <span>E-Posta:</span>
                  <span> info@kurumadi.com</span>
                </div>
              </div>
              <div className={styles.tablerclockHour4FilledParent}>
                <Image
                  className={styles.gridiconslocation}
                  loading="lazy"
                  width={24}
                  height={24}
                  sizes="100vw"
                  alt=""
                  src="/tablerclockhour4filled.svg"
                />
                <div className={styles.adresKurumunAkContainer}>
                  <span>Çalışma Saatleri:</span>
                  <span> Pazartesi - Cuma, 09:00 - 18:00</span>
                </div>
              </div>
            </div>
          </div>
        </section>
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
