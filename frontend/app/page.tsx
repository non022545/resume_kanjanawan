import Image from "next/image";
import RevealOnScroll from "./reveal-on-scroll";

const Icon = ({ name }: { name: "phone" | "mail" | "pin" | "arrow" }) => {
  const paths = {
    phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
};

const cafeDuties = [
  "ดูแลและแก้ไขปัญหาเฉพาะหน้าของร้านแต่ละสาขา",
  "วางแผนและควบคุมการจัดซื้อวัตถุดิบ รวมถึงดูแลสต๊อกสินค้า",
  "จัดตารางงาน จัดทำเงินเดือน และดูแลระบบส่งเงินประกันสังคมประจำเดือน",
  "ประเมินการสั่งวัตถุดิบในช่วงเทศกาล และวิเคราะห์แนวโน้มยอดขายของแต่ละร้าน",
  "ประสานงานกับหน่วยการตลาด OR และหน่วย Audit Café Amazon",
  "วางแผนและควบคุมงบประมาณให้อยู่ในเกณฑ์ที่กำหนด",
  "จัดทำรายงานยอดขาย รายรับ–รายจ่าย และงบดุล เพื่อนำเสนอต่อผู้บริหาร",
];

const kmtDuties = [
  "ดูแลงานบัญชีเจ้าหนี้และลูกหนี้ รับ–วางบิล ตรวจสอบเอกสาร ติดตามการชำระเงิน และจัดทำรายงานประจำเดือน",
  "บริหารเงินสดย่อย (Petty Cash) ควบคุมยอดเงินสด และจัดทำเอกสารประกอบ",
  "บันทึกต้นทุน Import Payment และจัดเก็บเอกสารนำเข้าสินค้า",
  "จัดทำ ตรวจสอบ และจัดเก็บเอกสารบัญชีและภาษี เช่น ใบกำกับภาษีซื้อ–ขาย และใบสำคัญจ่าย",
  "ประสานงาน Supplier เปิดใบสั่งซื้อ (PO) และติดตามการผลิต การจัดซื้อ และการส่งมอบ",
  "เปรียบเทียบราคา จัดซื้อสินค้า วัตถุดิบ และวัสดุอุปกรณ์",
  "ควบคุมสต๊อก รับสินค้าเข้าระบบ อัปเดตสินค้าคงเหลือ จัดทำ Lot Number รายงาน และนับสต๊อกประจำเดือน",
  "วางแผนโลจิสติกส์ จองรถ ติดตามการจัดส่ง และตรวจสอบค่าใช้จ่ายการขนส่ง",
  "ดูแลสำนักงานและทรัพย์สินบริษัท พร้อมสนับสนุนงานธุรการและงานปฏิบัติการ",
];

const skills = [
  "การจัดซื้อและซัพพลายเชน", "การบริหารจัดการ", "บัญชีเบื้องต้น",
  "Microsoft Word", "Microsoft Excel", "PowerPoint", "Google Sheets",
  "ความคิดสร้างสรรค์", "การคิดเชิงวิพากษ์", "ละเอียดรอบคอบ",
];

export default function Home() {
  return (
    <main>
      <RevealOnScroll />
      <nav className="topbar" aria-label="เมนูหลัก">
        <a className="brand" href="#top">KC<span>.</span></a>
        <div className="navlinks">
          <a href="#profile">เกี่ยวกับฉัน</a><a href="#experience">ประสบการณ์</a>
          <a href="#education">การศึกษา</a><a href="#contact">ติดต่อ</a>
        </div>
        <a className="nav-cta" href="mailto:Ning.gc221042@gmail.com">ร่วมงานกัน <Icon name="arrow" /></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-orbit" aria-hidden="true"><span>KC</span></div>
        <div className="hero-copy">
          <p className="eyebrow">PORTFOLIO · 2026</p>
          <h1><span>Kanjanawan</span><br/><em>Chaophichit</em></h1>
          <p className="hero-role">Administrator <span>/</span> Accounting <span>/</span><br/> Supply Chain Coordinator</p>
        </div>
        <div className="hero-bottom">
          <p>ผู้เชี่ยวชาญด้านการประสานงาน<br/>ที่เชื่อว่ารายละเอียดสร้างความแตกต่าง</p>
          <a href="#profile" className="scroll-link"><span>เลื่อนเพื่อทำความรู้จัก</span><b>↓</b></a>
        </div>
        <div className="hero-index" aria-hidden="true">01</div>
      </section>

      <section className="profile section" id="profile">
        <header className="section-head reveal reveal-left"><span>01 / PROFILE</span><h2>เปลี่ยนความซับซ้อน<br/>ให้เป็นระบบที่<em>ลงตัว</em></h2></header>
        <div className="profile-grid">
          <figure className="portrait-card reveal reveal-left">
            <Image src="/images/profile.jpg" alt="Kanjanawan Chaophichit" fill sizes="(max-width: 850px) 90vw, 32vw" priority />
            <figcaption><span>KANJANAWAN<br/>CHAOPHICHIT</span><b>PROFILE</b></figcaption>
          </figure>
          <div className="profile-copy reveal reveal-right">
            <p className="lead">มีประสบการณ์ด้านการบริหารร้าน งานธุรการ บัญชีเบื้องต้น การจัดซื้อ และดูแลสต๊อก</p>
            <p>สามารถประสานงาน จัดทำเอกสาร และติดตามงานได้ดี เป็นคนละเอียดรอบคอบ รับผิดชอบ แก้ไขปัญหาเฉพาะหน้าได้ และพร้อมเรียนรู้สิ่งใหม่อยู่เสมอ</p>
            <div className="values"><div><strong>6+</strong><span>ปีแห่งประสบการณ์</span></div><div><strong>3.88</strong><span>เกรดเฉลี่ยล่าสุด</span></div><div><strong>∞</strong><span>พร้อมเรียนรู้เสมอ</span></div></div>
          </div>
        </div>
      </section>

      <section className="experience section dark" id="experience">
        <header className="section-head light reveal reveal-right"><span>02 / EXPERIENCE</span><h2>ประสบการณ์<br/><em>การทำงาน</em></h2></header>
        <div className="timeline">
          <article className="job reveal reveal-left">
            <div className="job-meta"><span className="year">2567 — ปัจจุบัน</span><span className="number">01</span></div>
            <div className="job-main"><p className="company">บริษัท เคเอ็มที จำกัด</p><h3>หัวหน้าฝ่ายการจัดการ</h3><p className="job-en">Administrator / Accounting &amp; Supply Chain Coordinator</p><ul>{kmtDuties.map((d) => <li key={d}>{d}</li>)}</ul></div>
          </article>
          <article className="job reveal reveal-right">
            <div className="job-meta"><span className="year">2563 — 2567</span><span className="number">02</span></div>
            <div className="job-main"><p className="company">บริษัท คนตัวเล็ก จำกัด</p><h3>ผู้จัดการร้าน Café Amazon</h3><ul>{cafeDuties.map((d) => <li key={d}>{d}</li>)}</ul>
              <div className="experience-gallery">
                <figure><Image src="/images/amazon1.jpg" alt="การอบรมหลักสูตรบริหารร้าน Café Amazon" fill sizes="(max-width: 850px) 100vw, 32vw" /><figcaption>Amazon Inspiring Campus</figcaption></figure>
                <figure><Image src="/images/amazon2.jpg" alt="รับประกาศนียบัตรการอบรม Café Amazon" fill sizes="(max-width: 850px) 100vw, 32vw" /><figcaption>Café Amazon Training</figcaption></figure>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="education section" id="education">
        <header className="section-head reveal reveal-left"><span>03 / EDUCATION</span><h2>รากฐานของ<br/><em>การเติบโต</em></h2></header>
        <div className="edu-list">
          <article className="edu reveal reveal-right"><span className="edu-year">2566 — 2568</span><div><p>มหาวิทยาลัยธนบุรี</p><h3>บริหารธุรกิจบัณฑิต</h3><span>สาขาวิชาการตลาด</span></div><strong>3.88<small>/4 GPA</small></strong></article>
          <article className="edu reveal reveal-left"><span className="edu-year">2564 — 2565</span><div><p>วิทยาลัยเทคโนโลยีสยาม (สยามเทค)</p></div><strong>3.88<small>/4 GPA</small></strong></article>
          <article className="edu reveal reveal-right"><span className="edu-year">2559 — 2561</span><div><p>โรงเรียนเทพศิรินทร์ นนทบุรี</p><h3>แผนการเรียน อังกฤษ — คณิตศาสตร์</h3></div><strong>3.56<small>/4 GPA</small></strong></article>
        </div>
      </section>

      <section className="skills section dark" id="skills">
        <header className="section-head light reveal reveal-right"><span>04 / EXPERTISE</span><h2>ทักษะที่พร้อม<br/><em>ขับเคลื่อนงาน</em></h2></header>
        <div className="skill-cloud reveal reveal-left">{skills.map((s, i) => <span className={i < 3 ? "featured" : ""} key={s}>{s}</span>)}</div>
        <div className="skill-footer reveal reveal-right">
          <div><span>LANGUAGES</span><p>ไทย <b>● ● ● ● ●</b></p><p>อังกฤษ <b>● ● ● ○ ○</b></p></div>
          <p>สื่อสารภาษาอังกฤษได้ พร้อมเรียนรู้<br/>และพัฒนาทักษะอยู่ตลอดเวลา</p>
        </div>
      </section>

      <section className="training section">
        <header className="section-head reveal reveal-left"><span>05 / TRAINING</span><h2>เรียนรู้<br/><em>อย่างต่อเนื่อง</em></h2></header>
        <div className="training-list reveal reveal-right"><div><span>01</span><p>หลักสูตรการบริหารร้านกาแฟ Café Amazon</p><small>ตามมาตรฐาน บริษัท ปตท. น้ำมันและการค้าปลีก จำกัด</small></div><div><span>02</span><p>การใช้งาน SMEMOVE ขั้นพื้นฐาน</p></div></div>
      </section>

      <footer id="contact">
        <p className="eyebrow">LET’S WORK TOGETHER</p><h2>พร้อมสร้างงานที่ดี<br/><em>ไปด้วยกัน</em></h2>
        <div className="contact-grid">
          <a href="tel:0944097355"><Icon name="phone" /><span>โทรศัพท์<small>094-4097355</small></span></a>
          <a href="mailto:Ning.gc221042@gmail.com"><Icon name="mail" /><span>อีเมล<small>Ning.gc221042@gmail.com</small></span></a>
          <div><Icon name="pin" /><span>ที่อยู่<small>10 ม.6 ต.ทวีวัฒนา อ.ไทรน้อย จ.นนทบุรี</small></span></div>
        </div>
        <div className="footer-bottom"><span>© 2026 KANJANAWAN CHAOPHICHIT</span><a href="#top">กลับขึ้นด้านบน ↑</a></div>
      </footer>
    </main>
  );
}
