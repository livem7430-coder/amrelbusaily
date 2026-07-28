import type { ComponentType } from "react";

function TechnicalSEO() {
  return (
    <>
      <p>
        السيو التقني هو الأساس اللي بيقف عليه أي شغل SEO ناجح. لو موقعك مش متفهرس صح، أو بطيء، أو
        فيه أخطاء زحف — كل المحتوى والباك لينكس مش هيفرقوا. في المقال ده هشاركك نفس الـChecklist
        اللي بستخدمه في أوديت سيو تقني لأكتر من 50 مشروع.
      </p>

      <h2>1. الفهرسة (Indexing) والزحف (Crawling)</h2>
      <p>
        أول حاجة بعملها: أفتح Google Search Console وأشوف صفحات{" "}
        <strong>Pages → Indexed</strong> مقابل عدد الصفحات الفعلي في الموقع. لو الفرق كبير، غالباً
        عندك مشكلة زحف.
      </p>
      <ul>
        <li>راجع <strong>robots.txt</strong> — تأكد إنك مش بتحجب صفحات مهمة عن جوجل.</li>
        <li>ولّد <strong>sitemap.xml</strong> ديناميكي وارفعه في Search Console.</li>
        <li>استخدم <strong>Screaming Frog</strong> لزحف الموقع محلياً وكشف الـ404، الريدايركت الطويلة، والصفحات اليتيمة (Orphan pages).</li>
      </ul>

      <h2>2. Core Web Vitals وسرعة الموقع</h2>
      <p>
        جوجل بيستخدم Core Web Vitals كإشارة ترتيب. الثلاث مقاييس المهمة:
      </p>
      <ul>
        <li><strong>LCP</strong> (أقل من 2.5 ثانية) — سرعة ظهور أكبر عنصر.</li>
        <li><strong>INP</strong> (أقل من 200ms) — سرعة استجابة الموقع للتفاعل.</li>
        <li><strong>CLS</strong> (أقل من 0.1) — استقرار الصفحة أثناء التحميل.</li>
      </ul>
      <p>
        استخدم PageSpeed Insights وWebPageTest للقياس. الحلول الشائعة: ضغط الصور بصيغة WebP،
        تفعيل lazy loading، وتقليل JavaScript غير الضروري.
      </p>

      <h2>3. Schema Markup و Structured Data</h2>
      <p>
        Schema بيساعد جوجل يفهم محتواك ويعرضه في Rich Snippets. الأنواع الأساسية:
      </p>
      <ul>
        <li><strong>Organization / Person</strong> — للصفحة الرئيسية.</li>
        <li><strong>Product</strong> — لصفحات المنتجات في المتاجر.</li>
        <li><strong>Article</strong> — للمقالات والمدونة.</li>
        <li><strong>FAQPage</strong> — لصفحات الأسئلة الشائعة (بيزود الـCTR بشكل ملحوظ).</li>
        <li><strong>BreadcrumbList</strong> — لتحسين ظهور الروابط في نتائج البحث.</li>
      </ul>

      <h2>4. البنية الداخلية والروابط</h2>
      <p>
        الروابط الداخلية بتوزع Link Equity بين صفحاتك. القاعدة: أي صفحة مهمة لازم توصلها من الهوم
        في 3 كليكات أو أقل. اربط بين المقالات المتعلقة بـ anchor text وصفي مش "اضغط هنا".
      </p>

      <h2>5. HTTPS، Mobile-First، وCanonical Tags</h2>
      <ul>
        <li>الموقع لازم يكون HTTPS 100%.</li>
        <li>Responsive على الموبايل — جوجل بيفهرس النسخة الموبايل أولاً.</li>
        <li>كل صفحة لازم يكون عندها <strong>canonical tag</strong> يشاور على النسخة الأصلية لمنع Duplicate Content.</li>
      </ul>

      <h2>خلاصة</h2>
      <p>
        السيو التقني مش رفاهية — هو شرط أساسي. لو محتاج أوديت تقني كامل لموقعك، تواصل معايا مباشرة
        وهنشوف مع بعض إيه اللي بيمنعك من التصدر.
      </p>
    </>
  );
}

function EcommerceSEO() {
  return (
    <>
      <p>
        سيو المتاجر الإلكترونية مختلف تماماً عن سيو المدونات. عندك آلاف الصفحات (منتجات، فئات،
        فلاتر)، ومنافسة شرسة، وكل تحسين ممكن يترجم مباشرة لمبيعات. اللي هعرضه هنا هو نفس المنهجية
        اللي طبقتها على متاجر فاشون وتك وحققت +40% ترافيك و+35% مبيعات.
      </p>

      <h2>1. هيكل الموقع (Site Architecture)</h2>
      <p>
        الهيكل الأمثل للمتجر: <strong>Home → Category → Subcategory → Product</strong>. تجنب
        الصفحات العميقة أكتر من 4 مستويات. استخدم Breadcrumbs في كل صفحة لتسهيل الزحف وتحسين تجربة
        المستخدم.
      </p>

      <h2>2. تحسين صفحات الفئات</h2>
      <p>
        صفحات الفئات هي أهم صفحات في المتجر لأنها بتستهدف كلمات مفتاحية عريضة عالية الترافيك.
      </p>
      <ul>
        <li>عنوان H1 يحتوي على الكلمة المفتاحية الرئيسية.</li>
        <li>وصف تعريفي 150–300 كلمة أعلى أو أسفل قائمة المنتجات.</li>
        <li>فلاتر SEO-friendly (URL نظيف بدون parameters عشوائية).</li>
        <li>Pagination صحيحة باستخدام rel=next/prev أو Load More.</li>
      </ul>

      <h2>3. تحسين صفحات المنتجات</h2>
      <ul>
        <li>Title Tag يتضمن: اسم المنتج + الماركة + الخاصية المميزة.</li>
        <li>Meta Description تحفيزية تحتوي على USP وCTA.</li>
        <li>وصف منتج أصلي (مش المنسوخ من الموردين).</li>
        <li>صور مضغوطة بـalt text وصفي.</li>
        <li><strong>Product Schema</strong> يحتوي على السعر، التوفر، والتقييمات.</li>
        <li>Reviews حقيقية — دي بترفع الـCTR بنسبة تصل لـ35%.</li>
      </ul>

      <h2>4. التعامل مع المنتجات غير المتوفرة</h2>
      <p>
        متحذفش الصفحة! خليها متاحة مع رسالة "غير متوفر حالياً" واقترح بدائل. لو المنتج اتشال نهائياً،
        اعمل 301 redirect لأقرب منتج مشابه أو صفحة الفئة.
      </p>

      <h2>5. المحتوى: المدونة والأدلة</h2>
      <p>
        المتجر اللي بس بيبيع بدون محتوى بيخسر. أنشئ:
      </p>
      <ul>
        <li>أدلة شرائية (Buying Guides) لكل فئة.</li>
        <li>مقارنات بين المنتجات.</li>
        <li>محتوى Long-tail يستهدف أسئلة العملاء.</li>
      </ul>

      <h2>6. السيو التقني للمتاجر</h2>
      <ul>
        <li>سرعة تحميل أقل من 3 ثواني (كل ثانية زيادة = خسارة 7% تحويلات).</li>
        <li>Faceted Navigation مضبوط بـcanonical وnoindex للـfilters اللي متولد منها آلاف الصفحات المكررة.</li>
        <li>Sitemap منفصل للمنتجات ويتحدث تلقائياً.</li>
      </ul>

      <h2>خلاصة</h2>
      <p>
        سيو المتاجر ماراثون مش سباق سريع، لكن كل خطوة صح بترجع أضعافها في المبيعات. لو عايز أوديت
        متكامل لمتجرك، احجز استشارة معايا.
      </p>
    </>
  );
}

function AEOArticle() {
  return (
    <>
      <p>
        2026 مش زي 2022. الناس بقت بتسأل ChatGPT وPerplexity وGoogle AI Overviews بدل ما تكتب في
        جوجل وتضغط على أول رابط. لو موقعك مش متحسن للـ<strong>AEO (Answer Engine Optimization)</strong>،
        أنت بتخسر ترافيك محتمل ضخم.
      </p>

      <h2>يعني إيه AEO؟</h2>
      <p>
        AEO هو تحسين المحتوى عشان يظهر كإجابة مباشرة في محركات الإجابات (Answer Engines) زي ChatGPT،
        Perplexity، Google SGE، وBing Copilot. الفكرة إن الـAI بيقرأ محتواك ويستخدمه كمصدر للإجابة.
      </p>

      <h2>1. اكتب محتوى منظم Question-Answer</h2>
      <p>
        AI Engines بتحب المحتوى اللي بيجاوب على سؤال محدد بشكل مباشر. الصيغة الأمثل:
      </p>
      <ol>
        <li>السؤال كـ H2 أو H3.</li>
        <li>إجابة مباشرة في 40–60 كلمة في أول فقرة.</li>
        <li>تفاصيل وأمثلة بعد كده.</li>
      </ol>

      <h2>2. استخدم FAQ Schema</h2>
      <p>
        FAQPage Schema بيخلي محركات البحث والـAI يفهموا هيكل الأسئلة والأجوبة في صفحتك. ده بيزود
        فرصة الظهور في Featured Snippets وAI Answers.
      </p>

      <h2>3. E-E-A-T: خبرة، تجربة، سلطة، ثقة</h2>
      <p>
        جوجل بتقيم المصادر قبل ما تستخدمها في AI Overviews. تأكد إن:
      </p>
      <ul>
        <li>عندك صفحة "من نحن" واضحة.</li>
        <li>كل مقال ليه كاتب معروف بـPerson Schema.</li>
        <li>ذكر المراجع والمصادر.</li>
        <li>الموقع HTTPS ومحدث بانتظام.</li>
      </ul>

      <h2>4. محتوى شامل يغطي الموضوع كامل</h2>
      <p>
        AI مش بيحب المقالات السطحية. غطي الموضوع من كل زواياه في مقال واحد قوي بدل 5 مقالات ضعيفة.
        استخدم منهجية "Topic Cluster": مقال رئيسي (Pillar) + مقالات فرعية مرتبطة بيه.
      </p>

      <h2>5. جهز موقعك للـLLM Crawlers</h2>
      <ul>
        <li>ماتحجبش <strong>GPTBot</strong> و<strong>PerplexityBot</strong> و<strong>Google-Extended</strong> من robots.txt (إلا لو عايز فعلاً).</li>
        <li>وفر HTML نظيف — LLMs بتقرأ الـHTML مش JavaScript المعقد.</li>
        <li>استخدم Semantic HTML: article, section, h1-h6.</li>
      </ul>

      <h2>6. الظهور في Perplexity وChatGPT Search</h2>
      <p>
        الظهور في الإجابات بيعتمد على: قوة الدومين (Authority)، جودة المحتوى، وذكرك في مصادر خارجية
        موثوقة. اشتغل على PR رقمي وضيف, guest posts, ومراجعات في مواقع كبيرة.
      </p>

      <h2>خلاصة</h2>
      <p>
        AEO مش بديل للـSEO — هو امتداد ليه. الأساس واحد: محتوى ممتاز موثق منظم. لو عايز أساعدك تجهز
        موقعك للـAI Search، تواصل معايا.
      </p>
    </>
  );
}

function KeywordResearch() {
  return (
    <>
      <p>
        بحث الكلمات المفتاحية هو 40% من نجاح أي حملة سيو. تستهدف كلمة غلط = تخسر شهور شغل. المقال
        ده هيوريك المنهجية اللي بستخدمها فعلياً مع كل عميل جديد.
      </p>

      <h2>1. ابدأ بنية البحث (Search Intent)</h2>
      <p>
        قبل ما تختار أي كلمة، افهم نية اللي بيدور:
      </p>
      <ul>
        <li><strong>Informational</strong> — "إيه هو السيو" — بيدور معلومة.</li>
        <li><strong>Navigational</strong> — "amrelbusaily" — بيدور موقع محدد.</li>
        <li><strong>Commercial</strong> — "أفضل أداة سيو" — بيقارن.</li>
        <li><strong>Transactional</strong> — "شراء أجهزة جيم" — جاهز يشتري.</li>
      </ul>
      <p>
        لو عندك متجر، ركز على Commercial وTransactional. لو مدونة، ابدأ بـInformational واعمل قمع
        ينزل للـTransactional.
      </p>

      <h2>2. استخرج Seed Keywords</h2>
      <p>
        اكتب 10–20 كلمة أساسية بتوصف نشاطك. مثال لمتجر جيم: "أجهزة جيم"، "دمبل"، "بروتين"،
        "معدات كارديو"...
      </p>

      <h2>3. وسّع القائمة بالأدوات</h2>
      <ul>
        <li><strong>Ahrefs Keywords Explorer</strong> — الأقوى لتحليل الصعوبة والحجم.</li>
        <li><strong>SEMrush Keyword Magic Tool</strong> — يعطي آلاف الأفكار المرتبطة.</li>
        <li><strong>Google Keyword Planner</strong> — مجاني ودقيق للـPPC.</li>
        <li><strong>AnswerThePublic</strong> — للأسئلة اللي بيسألها الناس.</li>
        <li><strong>Google Autocomplete + People Also Ask</strong> — مجاني وقوي.</li>
      </ul>

      <h2>4. ركز على Long-tail Keywords</h2>
      <p>
        الكلمات القصيرة (Head Terms) تنافسية جداً وصعبة. الكلمات الطويلة (Long-tail) عندها:
      </p>
      <ul>
        <li>منافسة أقل بكتير.</li>
        <li>نية بحث أوضح.</li>
        <li>معدل تحويل أعلى.</li>
      </ul>
      <p>
        مثال: بدل ما تستهدف "أجهزة جيم"، استهدف "أفضل جهاز مشي منزلي تحت 5000 جنيه".
      </p>

      <h2>5. حلل المنافسة (SERP Analysis)</h2>
      <p>
        قبل ما تلتزم بكلمة، ابحث عنها في جوجل وشوف:
      </p>
      <ul>
        <li>مين اللي متصدر — دومينات كبيرة ولا صغيرة؟</li>
        <li>نوع المحتوى المتصدر — مقالات، فيديو، متاجر؟</li>
        <li>وجود Featured Snippet أو AI Overview.</li>
        <li>الـKD (Keyword Difficulty) في Ahrefs.</li>
      </ul>

      <h2>6. اعمل خريطة محتوى (Content Map)</h2>
      <p>
        رتب الكلمات في Excel أو Airtable مع: Volume, KD, Intent, Priority. جمّع الكلمات المتشابهة
        في مقال واحد بدل ما تعمل مقال لكل كلمة.
      </p>

      <h2>7. راجع وحدث كل 3 شهور</h2>
      <p>
        Search Trends بتتغير. راجع الكلمات كل ربع سنة، شيل اللي ماحققتش نتائج، وضيف كلمات جديدة من
        Search Console (Queries اللي بتظهر فيها بدون ما تكون مستهدفها فعلياً).
      </p>

      <h2>خلاصة</h2>
      <p>
        بحث الكلمات المفتاحية مهارة بتتطور بالممارسة. لو عايز خطة محتوى وسيو مبنية على بحث كلمات
        احترافي لموقعك، تواصل معايا.
      </p>
    </>
  );
}

export const articles: Record<string, ComponentType> = {
  "technical-seo-guide-ar": TechnicalSEO,
  "ecommerce-seo-ar": EcommerceSEO,
  "aeo-ai-search-ar": AEOArticle,
  "keyword-research-ar": KeywordResearch,
};
