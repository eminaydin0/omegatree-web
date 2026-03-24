import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const items = [
  { title: 'Klinik Doğrulukta\nMetabolomik Analizler', text: 'Kütle spektrometresi tabanlı ölçümlerle geniş metabolomik panel.' },
  { title: 'Multidisipliner\nUzman Kadro', text: 'Klinik biyokimya, biyostatistik, yapay zekâ, beslenme bilimi ve klinik metabolizma alanlarında uzman akademik ekip.' },
  { title: 'Güvenilir ve Şeffaf\nRaporlama Sistemi', text: 'Her sonuç bilimsel karşılığıyla açıklanır, uzmanların kolaylıkla değerlendirebileceği formatta sunulur.' },
  { title: 'Dijital Sağlık Altyapısı\nile Kolay Takip', text: 'Sonuçlara güvenli çevrimiçi erişim ve takip imkanı.' },
]

export default function Information() {
  return (
    <section className="w-100 float-left service-con padding-bottom padding-top information-con" id="hakkimizda">
      <Container>
        <div className="service-inner-con position-relative information-inner-con dotted-img">
          <div className="genric-heading text-center">
            <h2 className="position-relative">Hakkımızda</h2>
            <h3 className="h5">Bilimin Işığında Kişiselleştirilmiş Sağlık Çözümleri Üretiyoruz</h3>
            <p className="mb-0">OmegaTree, metabolik sağlığı biyobelirteçler üzerinden bilimsel doğrulukla değerlendirmek ve kişiye özgü beslenme önerileri sunmak amacıyla geliştirilmiş yeni nesil bir sağlık teknolojisi platformudur. MAS-10® mikroörnekleme teknolojisini hedefli metabolomik analizlerle birleştirerek, bireylerin biyolojik yaşlanma süreçlerini, inflamasyon düzeylerini ve beslenme kalitelerini objektif olarak ortaya koyuyoruz.</p>
            <p className="mb-0 mt-2">Amacımız; karmaşık metabolik verileri sade, anlaşılır ve uygulanabilir sağlık önerilerine dönüştürerek herkes için erişilebilir bir kişiselleştirilmiş sağlık yaklaşımı sunmaktır.</p>
            <h4 className="position-relative mt-4 h5">Bilimsel Güvence ile Sunulan Hizmetler</h4>
          </div>
          <div className="service-box wow fadeInUp">
            <Row>
              {items.map((item, i) => (
                <Col key={i} lg={3} md={6} sm={6}>
                  <div className="service-box-item position-relative">
                    <h4>{item.title.split('\n').map((line, j) => <React.Fragment key={j}>{line}<br /></React.Fragment>)}</h4>
                    <p>{item.text}</p>
                    <a href="#iletisim">Detaylı Bilgi <span className="fas fa-arrow-right" /></a>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </section>
  )
}
