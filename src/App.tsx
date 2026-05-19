import type { CardItem, PricePlan, Voice } from "./types";

const navItems = [
  { label: "ホーム", href: "#top" },
  { label: "サービス", href: "#service" },
  { label: "料金", href: "#price" },
  { label: "お客様の声", href: "#voice" },
  { label: "アクセス", href: "#access" },
  { label: "FAQ", href: "#faq" },
];

const worries: CardItem[] = [
  { title: "ジムに通ったことがない", icon: "beginner-gym" },
  { title: "何から始めればいいかわからない", icon: "where-start" },
  { title: "運動が続くか不安", icon: "continue-anxiety" },
  { title: "食事制限がきつそうで心配", icon: "diet-concern" },
];

const services: CardItem[] = [
  {
    title: "初回カウンセリング",
    body: "目標やお悩みを丁寧にヒアリング。体の状態をチェックし、最適なプランをご提案します。",
    icon: "counseling",
  },
  {
    title: "マンツーマントレーニング",
    body: "一人ひとりに合わせたトレーニングで、無理なく効率的に目標達成をサポートします。",
    icon: "personal-training",
  },
  {
    title: "食事と習慣サポート",
    body: "食事のアドバイスや日常の習慣づくりまでサポート。リバウンドしにくい体づくりを目指します。",
    icon: "food-habit",
  },
];

const reasons: CardItem[] = [
  { title: "初心者専門", body: "運動が苦手な方や未経験の方を専門にサポートします。", icon: "beginner-specialist" },
  { title: "完全予約制", body: "一人ひとりにしっかり向き合う完全予約制で安心です。", icon: "reservation" },
  { title: "金沢市内で通いやすい", body: "金沢駅からアクセス良好。仕事帰りやお買い物ついでにも。", icon: "access-kanazawa" },
  { title: "LINEで予約完結", body: "予約から変更・相談までLINEで簡単に完結できます。", icon: "line-reservation" },
];

const pricePlans: PricePlan[] = [
  {
    title: "体験トレーニング",
    price: "3,300",
    suffix: "円（税込）",
    body: "まずは体験から。トレーニングや雰囲気をご体感いただけます。",
    icon: "personal-training",
  },
  {
    title: "月4回プラン",
    price: "32,000",
    suffix: "円〜（税込）",
    body: "週1回のペースで理想の体づくりをサポートします。",
    icon: "reservation",
    featured: true,
    badges: ["継続しやすい", "おすすめ"],
  },
  {
    title: "短期集中プラン",
    price: "要相談",
    body: "目標や期間に合わせたオーダーメイドプランをご提案します。",
    icon: "goal-flag",
  },
];

const voices: Voice[] = [
  {
    title: "初心者が安心して通えた",
    body: "運動経験がほとんどなく不安でしたが、丁寧にサポートしてもらえて安心でした。毎回楽しく通えています！",
    meta: "30代女性・会社員",
    avatar: "avatar-one",
  },
  {
    title: "食事制限がきつくない",
    body: "食事指導も厳しすぎず、続けやすい内容で無理なく体が変わってきました。食事の考え方が変わりました！",
    meta: "40代女性・主婦",
    avatar: "avatar-two",
  },
  {
    title: "姿勢改善の安心感",
    body: "猫背や肩こりが改善されて、姿勢が良くなったと周りからも言われるようになりました。",
    meta: "30代男性・会社員",
    avatar: "avatar-three",
  },
];

const faqs = [
  {
    question: "初心者でも大丈夫ですか？",
    answer: "はい、9割以上が初心者の方です。お一人おひとりのペースに合わせて丁寧にサポートしますのでご安心ください。",
  },
  {
    question: "予約方法は？",
    answer: "LINEまたはWEB予約フォームから24時間いつでもご予約いただけます。",
  },
  {
    question: "持ち物は何が必要ですか？",
    answer: "動きやすい服装と室内シューズをご用意ください。タオル・お水・ウェアのレンタルもご用意しています。",
  },
  {
    question: "無理な勧誘はありますか？",
    answer: "無理な勧誘や回数券の強要は一切ありません。安心してご体験ください。",
  },
];

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="RESET BODY STUDIO ホーム">
      <span className="brand-mark">R</span>
      <span className="brand-text">RESET BODY STUDIO</span>
    </a>
  );
}

function FooterBrand() {
  return (
    <div className="footer-brand">
      <span className="brand-mark">R</span>
      <span className="brand-text">RESET<br />BODY STUDIO</span>
    </div>
  );
}

function ChatIcon() {
  return <span className="chat-icon" aria-hidden="true" />;
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-title">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}

function GeneratedIcon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <img
      className={`generated-icon ${className}`}
      src={`/assets/icons/${name}.png`}
      alt=""
      aria-hidden="true"
      loading="lazy"
    />
  );
}

function Header() {
  return (
    <header className="site-header">
      <Brand />
      <input id="nav-toggle" className="nav-toggle" type="checkbox" aria-label="メニューを開く" />
      <label className="menu-toggle" htmlFor="nav-toggle" aria-hidden="true">
        <span />
        <span />
        <span />
      </label>
      <nav className="global-nav" aria-label="グローバルナビゲーション">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>
      <a className="header-cta" href="https://line.me/" target="_blank" rel="noopener noreferrer">
        <ChatIcon />
        LINEで予約
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <h1>はじめてのジム通いを、<br /><span>無理なく続く習慣に。</span></h1>
        <p>石川県金沢市の初心者向けパーソナルトレーニングジム。運動が苦手な方でも、あなたのペースに合わせて丁寧にサポートします。</p>
        <div className="hero-actions">
          <a className="button button-primary" href="https://line.me/" target="_blank" rel="noopener noreferrer"><ChatIcon />LINEで体験予約</a>
          <a className="button button-outline" href="#price">料金を見る</a>
        </div>
        <ul className="hero-badges" aria-label="特徴">
          <li>初心者歓迎</li>
          <li>完全予約制</li>
          <li>金沢市内</li>
        </ul>
      </div>
      <div className="hero-visual" aria-label="トレーニング風景">
        <img src="/assets/images/hero-training.png" alt="トレーナーが女性のトレーニングをサポートしている様子" />
      </div>
    </section>
  );
}

function IconCard({ item }: { item: CardItem }) {
  return (
    <article className="mini-card">
      <GeneratedIcon name={item.icon} />
      <h3>{item.title}</h3>
      {item.body && <p>{item.body}</p>}
    </article>
  );
}

function ServiceCard({ item }: { item: CardItem }) {
  return (
    <article className="service-card">
      <GeneratedIcon name={item.icon} className="service-generated-icon" />
      <div>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
    </article>
  );
}

function PriceCard({ plan }: { plan: PricePlan }) {
  return (
    <article className={`price-card ${plan.featured ? "featured" : ""}`}>
      {plan.featured && <div className="popular">初心者に人気</div>}
      <GeneratedIcon name={plan.icon} className="price-generated-icon" />
      <h3>{plan.title}</h3>
      <p className={`price ${plan.price === "要相談" ? "consult" : ""}`}>
        {plan.price === "要相談" ? plan.price : <><strong>{plan.price}</strong>{plan.suffix}</>}
      </p>
      {plan.badges && (
        <div className="tags">
          {plan.badges.map((badge) => <span key={badge}>{badge}</span>)}
        </div>
      )}
      <p>{plan.body}</p>
      <a href="https://line.me/" target="_blank" rel="noopener noreferrer">詳細を見る</a>
    </article>
  );
}

function VoiceCard({ voice }: { voice: Voice }) {
  return (
    <article className="voice-card">
      <div className="voice-head">
        <span className={`avatar ${voice.avatar}`} />
        <div>
          <h3>{voice.title}</h3>
          <p>★★★★★ 5.0</p>
        </div>
      </div>
      <p>{voice.body}</p>
      <small>{voice.meta}</small>
    </article>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section className="section worries">
          <SectionTitle eyebrow="WORRIES" title="こんなお悩みありませんか？" />
          <div className="icon-grid four">{worries.map((item) => <IconCard key={item.title} item={item} />)}</div>
        </section>

        <section className="section" id="service">
          <SectionTitle eyebrow="SERVICE" title="サービス内容" />
          <div className="service-grid">{services.map((item) => <ServiceCard key={item.title} item={item} />)}</div>
        </section>

        <section className="section reason">
          <SectionTitle eyebrow="REASON" title="選ばれる理由" />
          <div className="icon-grid four">{reasons.map((item) => <IconCard key={item.title} item={item} />)}</div>
        </section>

        <section className="section" id="price">
          <SectionTitle eyebrow="PRICE" title="料金" />
          <div className="price-grid">{pricePlans.map((plan) => <PriceCard key={plan.title} plan={plan} />)}</div>
          <p className="note">※プラン内容や料金は変更になる場合がございます。詳細はお問い合わせください。</p>
        </section>

        <section className="section voice" id="voice">
          <SectionTitle eyebrow="VOICE" title="お客様の声" />
          <div className="voice-grid">{voices.map((voice) => <VoiceCard key={voice.title} voice={voice} />)}</div>
          <p className="note">※個人の感想であり、効果を保証するものではありません。</p>
        </section>

        <section className="section trainer-section">
          <SectionTitle eyebrow="TRAINER" title="トレーナー紹介" />
          <div className="trainer-card-large">
            <img src="/assets/images/trainer.png" alt="RESET BODY STUDIOのトレーナー" />
            <div className="trainer-copy">
              <h3>トレーナー名（仮）</h3>
              <p>一人ひとりに寄り添い、無理なく続けられるサポートを大切にしています。</p>
              <ul>
                <li>資格・経歴は差し替え予定</li>
                <li>初心者サポート重視</li>
                <li>無理なく続ける指導</li>
              </ul>
              <div className="placeholder">トレーナーのプロフィールは仮の内容です。写真・資格・経歴・メッセージは自由に差し替え可能です。</div>
            </div>
          </div>
        </section>

        <section className="section" id="access">
          <SectionTitle eyebrow="ACCESS" title="アクセス" />
          <div className="access-card">
            <img src="/assets/images/map.png" alt="金沢市内のアクセスマップ" />
            <div className="access-info">
              <h3>石川県金沢市</h3>
              <dl>
                <div><dt>営業時間</dt><dd>平日 10:00〜22:00 / 土日祝 9:00〜19:00</dd></div>
                <div><dt>金沢市内で通いやすい</dt><dd>金沢駅から車で約10分・駐車場完備で通いやすい立地です。</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="section faq" id="faq">
          <SectionTitle eyebrow="FAQ" title="よくある質問" />
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary><span>Q</span>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final-cta">
          <img src="/assets/images/cta-training.png" alt="体験トレーニングのイメージ" />
          <div>
            <h2>まずはLINEで<br /><span>体験トレーニング予約</span></h2>
            <p>あなたの目標やお悩みに合わせて、最適なプランをご提案します。まずはお気軽にご相談ください。</p>
            <a className="button button-primary" href="https://line.me/" target="_blank" rel="noopener noreferrer"><ChatIcon />LINEで体験予約</a>
            <small>24時間受付中 / 簡単30秒で予約完了！</small>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <FooterBrand />
        <nav aria-label="フッターナビゲーション">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <address>
          <p>石川県金沢市<br />金沢駅から車で約10分・駐車場完備</p>
          <p>076-123-4567<br />受付時間：平日 10:00〜22:00<br />土日祝 9:00〜19:00</p>
        </address>
        <a className="footer-cta" href="https://line.me/" target="_blank" rel="noopener noreferrer"><ChatIcon />LINEで予約</a>
        <div className="footer-bottom">
          <small>© RESET BODY STUDIO All Rights Reserved.</small>
          <span>プライバシーポリシー　｜　特定商取引法に基づく表記</span>
        </div>
      </footer>
    </>
  );
}

export default App;
