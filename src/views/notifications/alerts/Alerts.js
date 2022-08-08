import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { CMultiSelect } from '@coreui/react-pro'

import {
  CAlert,
  CAlertHeading,
  CAlertLink,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";
import { DocsExample } from "src/components";

const Alerts = () => {
  const url = "http://localhost:8080/api/hizmet/getall";
  const urlFirma = "http://localhost:8080/api/firma/getall";


  const [hizmets, setHizmets] = useState([]);
  const [firmas, setFirmas] = useState([])

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setHizmets(response.data.data);
        console.log(response.data.data)
      })
  }, [])
  const setData = (hizmet) => {
    let { hizmet_id, hizmet_ad } = hizmet;
    localStorage.setItem('hizmet_id', hizmet_id);
    localStorage.setItem('hizmet_ad', hizmet_ad);
  }
  const getData = () => {

    const setData = (firma) => {
      let { firma_id, yetkili_ad } = firma;
      localStorage.setItem('firma_id', firma_id);
      localStorage.setItem('yetkili_ad', yetkili_ad);
    }
    const getData = () => {
      axios.get(url)
        .then((getData) => {
          setHizmets(getData.data.data);
        })


    }
  }
  axios.get(urlFirma)
    .then((getData) => {
      setFirmas(getData.data.data);
    })

  useEffect(() => {
    axios.get(urlFirma)
      .then((response) => {
        setFirmas(response.data.data);
        console.log(response.data.data)
      })
  }, [])













  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>SATIŞ VE HİZMET SÖZLEŞMESİ</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Anlaşma içeriğinde kullanılacak olan yabancı dil çevirileri,
              fotoğraf, video görüntüleri katılımcı firma tarafından sağlanır.
              Ayrı bir sözleşme ile imza altına alınmadığı sürece yayıncıx
              firmanın belirtilen hizmetlerin sağlanması ile ilgili herhangi
              belirtilen sorumluluğu yoktur..
            </p>{" "}
            <hr></hr>
            <h5>Sözleşme Gereksinimleri</h5>
            <DocsExample

              href="components/alert">
              <form>
                <br />
                <br />
                <div class="row">
                  <div class="col">
                    <CAlert color="dark">Firma Seçimi</CAlert>


                    {firmas.map((firma) => {
                      return (
                        <div class="form-check form-check-inline">

                          <select
                            class="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox1"
                            value="option1"
                          ></select>
                          <label class="form-check-label" for="inlineCheckbox1">

                            <a>{firma.yetkili_ad.toUpperCase()}</a>
                          </label>
                        </div>

                      )
                    })}












                    <br />
                    <br />

                    <CAlert color="dark">Hizmet Seçimi</CAlert>

                    {hizmets.map((hizmet) => {
                      return (
                        <div class="form-check form-check-inline">

                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox1"
                            value="option1"
                          ></input>
                          <label class="form-check-label" for="inlineCheckbox1">

                            <a>{hizmet.hizmet_ad.toUpperCase()}</a>
                          </label>
                        </div>

                      )
                    })}

                  </div>
                  <br />
                  <br />

                  <div class="col">
                    <CAlert color="dark">Domain</CAlert>

                    <input
                      class="form-control"
                      type="text"
                      placeholder="Domain Giriniz"
                      name="firmaadi :"
                    />
                    <br />
                    <CAlert color="dark">Dİl Seçimi</CAlert>

                    <div class="form-check form-check-inline">
                      <div class="col">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input><label class="form-check-label" for="inlineCheckbox2">Türkçe</label></div>&nbsp;&nbsp;

                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                          ></input>
                          <label class="form-check-label" for="inlineCheckbox2">
                            İngilizce
                          </label>
                        </div>

                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                          ></input>
                          <label class="form-check-label" for="inlineCheckbox2">
                            Almanca
                          </label>
                        </div>

                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                          ></input>
                          <label class="form-check-label" for="inlineCheckbox2">
                            Fransızca
                          </label>
                        </div>

                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                          ></input>
                          <label class="form-check-label" for="inlineCheckbox2">
                            İtalyanca
                          </label>
                        </div>

                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                          ></input>
                          <label class="form-check-label" for="inlineCheckbox2">Japonca
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                          ></input>
                          <label class="form-check-label" for="inlineCheckbox2">
                            Rusça
                          </label>
                        </div>&nbsp;&nbsp;&nbsp;

                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                          ></input>
                          <label class="form-check-label" for="inlineCheckbox2">
                            Azerice
                          </label>
                        </div>
                        &nbsp;&nbsp;
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                          ></input>
                          <label class="form-check-label" for="inlineCheckbox2">
                            Arapça
                          </label>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                          ></input>
                          <label class="form-check-label" for="inlineCheckbox2">
                            Danca
                          </label>
                        </div>

                        <br></br>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div class="row">
                  <div class="col">
                    <CAlert color="dark">KDV'siz Fiyat</CAlert>
                    <div class="col-md-3">
                      <label for="validationCustom04" class="form-label">
                        Para Türü
                      </label>
                      <select
                        class="form-select"
                        id="validationCustom04"
                        required
                      >
                        <option>₺</option>
                        <option>$</option>
                        <option>€</option>
                      </select>
                      <div class="invalid-feedback">
                        Please select a valid state.
                      </div>
                    </div>

                    <br />
                    <input
                      class="form-control"
                      placeholder="KDV'siz fiyatı giriniz"
                      type="text"
                      name="firmaadi :"
                    />
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <div class="col">
                    <CAlert color="dark">Kapora</CAlert>
                    <div class="col-md-3">
                      <label for="validationCustom04" class="form-label">
                        Para Türü
                      </label>
                      <select
                        class="form-select"
                        id="validationCustom04"
                        required
                      >
                        <option>₺</option>
                        <option>$</option>
                        <option>€</option>
                      </select>
                      <div class="invalid-feedback">
                        Please select a valid state.
                      </div>
                    </div>
                    <br />
                    <input
                      class="form-control"
                      placeholder="Kapora miktarını giriniz"
                      type="text"
                      name="firmaadi :"
                    />
                  </div>
                  <br />
                  <br />
                  <div class="col">
                    <CAlert color="dark">Yıllık Yenileme Tutarı</CAlert>
                    <div class="col-md-3">
                      <label for="validationCustom04" class="form-label">
                        Para Türü
                      </label>
                      <select
                        class="form-select"
                        id="validationCustom04"
                        required
                      >
                        <option>₺</option>
                        <option>$</option>
                        <option>€</option>
                      </select>
                      <div class="invalid-feedback">
                        Please select a valid state.
                      </div>
                    </div>
                    <div class="col">
                      <br />
                      <input
                        class="form-control"
                        placeholder="Yıllık yenileme tutarını giriniz"
                        type="text"
                        name="firmaadi :"
                      />
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div class="row">
                  <div class="col">
                    <div class="row">
                      <CAlert color="dark">Sözleşme Tarihi</CAlert>
                      <div class="col">
                        <label for="birthday">Başlangıç Tarihi:</label>
                        <input
                          class="form-control"
                          type="date"
                          id="baştar"
                          name="birthday"
                        ></input>
                      </div>
                      &nbsp;&nbsp;
                      <div class="col">
                        <label for="birthday">Bitiş Tarihi:</label>
                        <input
                          class="form-control"
                          type="date"
                          id="bittar"
                          name="birthday"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <CAlert color="dark">Sözleşme Dosyası Yükleme</CAlert>
                    <br />
                    <input class="form-control" type="file" name="dosya" />
                  </div>
                </div>{" "}
                <br />
                <input class="form-control" type="button" value="ONAYLA" />
                <br />
                <input class="form-control" type="button" value="YENİLE" />
              </form>
              <br />
              <br />
              <CAlert color="success"></CAlert>

            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Alerts;
