import type { ReactNode } from "react";

function Answer({ children }: { children: ReactNode }) {
  return <p className="rounded-xl border border-border bg-surface p-5">{children}</p>;
}

/* 1. SEO basics FAQ */

export function SeoFaqBasicsAr() {
  return (
    <>
      <Answer>
        <strong>الإجابة المختصرة:</strong> السيو هو مجموعة قرارات تقنية ومحتوى وتجربة استخدام تجعل صفحاتك مفهومة لمحركات
        البحث ومفيدة للزائر، والنتائج تظهر تدريجيًا خلال ٣ إلى ٦ أشهر حسب حالة الموقع والمنافسة.
      </Answer>
      <h2>ما هو السيو ببساطة؟</h2>
      <p>
        السيو (SEO) هو تحسين موقعك ليظهر في نتائج البحث عندما يبحث عميلك عن حل تقدمه أنت. يشمل ثلاثة محاور: الجانب التقني
        (الزحف والفهرسة والسرعة)، المحتوى (تغطية نية البحث)، والسلطة (الروابط والإشارات والسمعة).
      </p>
      <h2>هل السيو مناسب لكل موقع؟</h2>
      <p>
        ليس دائمًا. إذا كان منتجك جديدًا تمامًا ولا أحد يبحث عنه، فالإعلانات المدفوعة أو بناء الطلب قد تسبق السيو. السيو
        منطقي عندما يوجد بحث فعلي على مشكلتك أو فئتك.
      </p>
      <h2>كم مرة يجب تحديث المحتوى؟</h2>
      <p>
        راجع الصفحات التي تجلب زيارات أو تحويلات كل ٣ إلى ٦ أشهر، وحدّث فورًا عند تغير الأسعار أو المواصفات أو السياسات.
        التحديث بلا سبب لا يحسّن الترتيب.
      </p>
      <h2>ما الفرق بين السيو المحلي والعام؟</h2>
      <p>
        السيو المحلي يستهدف نية جغرافية (خدمة في مدينة) ويعتمد على Google Business Profile والمراجعات وصفحات المدن،
        بينما السيو العام يستهدف نية معلوماتية أو تجارية بدون قيد جغرافي.
      </p>
      <h2>هل يمكن ضمان المركز الأول؟</h2>
      <p>
        لا. أي جهة تضمن مركزًا محددًا تبيع وهمًا. ما يمكن ضمانه هو منهج واضح، أولويات مبنية على بيانات، وقياس شفاف عبر
        Google Search Console والتحليلات.
      </p>
    </>
  );
}

export function SeoFaqBasicsEn() {
  return (
    <>
      <Answer>
        <strong>Short answer:</strong> SEO is a set of technical, content and experience decisions that make your pages
        understandable to search engines and useful to people. Meaningful results usually appear over three to six
        months, depending on site health and competition.
      </Answer>
      <h2>What is SEO, plainly?</h2>
      <p>
        SEO is improving your site so it appears when a potential customer searches for a problem you solve. It covers
        three areas: technical health (crawling, indexing, speed), content that matches search intent, and authority
        signals such as links and reputation.
      </p>
      <h2>Is SEO right for every website?</h2>
      <p>
        Not always. If nobody searches for your category yet, paid media or demand creation may come first. SEO makes
        sense when real search demand exists for the problem you solve.
      </p>
      <h2>How often should content be refreshed?</h2>
      <p>
        Review pages that earn traffic or revenue every three to six months, and update immediately when pricing,
        specifications or policies change. Editing without a reason does not improve rankings.
      </p>
      <h2>Local SEO vs. general SEO</h2>
      <p>
        Local SEO targets geographic intent and relies on Google Business Profile, reviews and location pages. General
        SEO targets informational or commercial intent without a location constraint.
      </p>
      <h2>Can a number one ranking be guaranteed?</h2>
      <p>
        No. Anyone guaranteeing a specific position is selling a fiction. What can be guaranteed is a clear method,
        data-driven priorities and transparent measurement in Google Search Console and analytics.
      </p>
    </>
  );
}

/* 2. AEO FAQ */

export function AeoFaqAr() {
  return (
    <>
      <Answer>
        <strong>الإجابة المختصرة:</strong> AEO هو تحسين المحتوى ليُقتبس داخل إجابات الذكاء الاصطناعي مثل AI Overviews
        وChatGPT وPerplexity، ويعتمد على إجابات مباشرة وبنية واضحة وبيانات منظمة ومصداقية قابلة للتحقق.
      </Answer>
      <h2>ما الفرق بين SEO وAEO وGEO؟</h2>
      <p>
        SEO يستهدف الترتيب في صفحة النتائج، وAEO (Answer Engine Optimization) يستهدف أن تكون إجابتك هي المقتبسة، وGEO
        (Generative Engine Optimization) هو الامتداد الخاص بالمحركات التوليدية. الأساس التقني واحد، لكن أسلوب الكتابة
        يختلف.
      </p>
      <h2>كيف يختار الذكاء الاصطناعي المصادر؟</h2>
      <p>
        النماذج ومحركات البحث المدمجة تميل إلى المصادر التي تجيب على السؤال مبكرًا، وتعرض حقائق قابلة للتحقق، ولها هوية
        كاتب واضحة، وبنية HTML نظيفة يسهل تقطيعها إلى مقاطع.
      </p>
      <h2>هل FAQ Schema ضرورية؟</h2>
      <p>
        هي مفيدة عندما تعكس أسئلة حقيقية موجودة في الصفحة، وتساعد على فهم المحتوى آليًا. لا تضعها لأسئلة مصطنعة أو غير
        ظاهرة للمستخدم.
      </p>
      <h2>هل ما زلت أحصل على زيارات مع انتشار الإجابات؟</h2>
      <p>
        الزيارات المعلوماتية البسيطة تتراجع، لكن الاستعلامات الشرائية والمقارنات والصفحات المتخصصة ما زالت تجلب زيارات
        عالية القيمة، بالإضافة إلى قيمة الظهور كمصدر مذكور.
      </p>
      <h2>كيف أقيس ظهوري في إجابات AI؟</h2>
      <p>
        تابع الاستعلامات والانطباعات في Google Search Console، وسجّل الإحالات من نطاقات مثل chatgpt.com وperplexity.ai في
        تحليلاتك، واختبر أسئلتك الأساسية يدويًا بشكل دوري.
      </p>
    </>
  );
}

export function AeoFaqEn() {
  return (
    <>
      <Answer>
        <strong>Short answer:</strong> AEO is optimizing content so it gets cited inside AI answers such as AI
        Overviews, ChatGPT and Perplexity. It relies on direct answers, clean structure, structured data and verifiable
        credibility.
      </Answer>
      <h2>SEO vs. AEO vs. GEO</h2>
      <p>
        SEO targets ranking on the results page. AEO (Answer Engine Optimization) targets being the answer that gets
        quoted. GEO (Generative Engine Optimization) is the same idea applied to generative engines. The technical base
        is shared; the writing style differs.
      </p>
      <h2>How do AI systems pick sources?</h2>
      <p>
        Answer engines favour pages that answer early, present verifiable facts, show a clear author identity, and use
        clean HTML that is easy to split into passages.
      </p>
      <h2>Is FAQ schema still worth adding?</h2>
      <p>
        Yes when it mirrors real questions visible on the page. It helps machines parse the content. Never add markup
        for questions users cannot see.
      </p>
      <h2>Will I still get clicks?</h2>
      <p>
        Simple informational clicks decline, but commercial queries, comparisons and specialist pages still bring
        high-value visits, plus the brand value of being a cited source.
      </p>
      <h2>How do I measure AI visibility?</h2>
      <p>
        Watch queries and impressions in Google Search Console, track referrals from domains such as chatgpt.com and
        perplexity.ai in analytics, and manually test your core questions on a schedule.
      </p>
    </>
  );
}

/* 3. Results timeline FAQ */

export function SeoTimelineFaqAr() {
  return (
    <>
      <Answer>
        <strong>الإجابة المختصرة:</strong> أول مؤشرات السيو (فهرسة وانطباعات) تظهر خلال أسابيع، وتحسن الترتيب المستقر
        عادة بين ٣ و٦ أشهر، والأثر على المبيعات يعتمد على المنافسة وجودة الصفحة وعمق التنفيذ.
      </Answer>
      <h2>لماذا يستغرق السيو وقتًا؟</h2>
      <p>
        محرك البحث يحتاج إلى إعادة زحف وفهرسة، ثم اختبار صفحتك أمام المستخدمين، ثم ترسيخ الثقة في الموضوع. هذا التسلسل لا
        يمكن اختصاره بالإنفاق وحده.
      </p>
      <h2>ما المؤشرات المبكرة الصحيحة؟</h2>
      <p>
        عدد الصفحات المفهرسة، نمو الانطباعات، ظهور استعلامات جديدة، تحسن متوسط الموضع من ٥٠ إلى ٢٠ مثلًا، وتحسن CTR بعد
        تعديل العناوين.
      </p>
      <h2>متى يجب أن أقلق؟</h2>
      <p>
        إذا مرت ٣ أشهر بلا نمو في الانطباعات ولا زيادة في الصفحات المفهرسة، فالغالب أن المشكلة تقنية أو أن المحتوى لا
        يطابق نية البحث.
      </p>
      <h2>هل تسريع النتائج ممكن؟</h2>
      <p>
        نعم جزئيًا: إصلاح حواجز الفهرسة، تحسين صفحات على حافة الصفحة الأولى، وتقوية الروابط الداخلية تعطي مكاسب أسرع من
        بناء محتوى جديد من الصفر.
      </p>
    </>
  );
}

export function SeoTimelineFaqEn() {
  return (
    <>
      <Answer>
        <strong>Short answer:</strong> Early SEO signals (indexing and impressions) appear within weeks. Stable ranking
        improvements usually take three to six months, and revenue impact depends on competition, page quality and
        execution depth.
      </Answer>
      <h2>Why does SEO take time?</h2>
      <p>
        Search engines must recrawl, index, test your page against real users, and then build topical trust. Spending
        more money does not compress that sequence.
      </p>
      <h2>What are valid early indicators?</h2>
      <p>
        Indexed page count, impression growth, new queries appearing, average position moving from 50 to 20, and CTR
        improvements after title rewrites.
      </p>
      <h2>When should I worry?</h2>
      <p>
        If three months pass with no impression growth and no increase in indexed pages, the cause is usually technical
        or a mismatch between the content and search intent.
      </p>
      <h2>Can results be accelerated?</h2>
      <p>
        Partly. Removing indexing blockers, improving pages sitting just off page one, and strengthening internal links
        deliver faster gains than publishing brand new content.
      </p>
    </>
  );
}

/* 4. Indexing FAQ */

export function IndexingFaqAr() {
  return (
    <>
      <Answer>
        <strong>الإجابة المختصرة:</strong> إذا لم تظهر صفحاتك في جوجل، افحص أولًا حالة الفهرسة في Google Search Console،
        ثم robots.txt ووسم noindex والـcanonical وجودة المحتوى قبل أي شيء آخر.
      </Answer>
      <h2>لماذا لا تُفهرس صفحتي؟</h2>
      <p>
        الأسباب الشائعة: حجب في robots.txt، وسم noindex، canonical يشير لصفحة أخرى، صفحة يتيمة بلا روابط داخلية، محتوى
        ضعيف أو مكرر، أو موقع جديد لم تكتمل ثقته بعد.
      </p>
      <h2>ما الفرق بين الزحف والفهرسة؟</h2>
      <p>
        الزحف هو زيارة الصفحة، والفهرسة هي قرار تخزينها وعرضها. صفحة قد تُزحف ولا تُفهرس إذا رأى المحرك أنها بلا قيمة
        إضافية.
      </p>
      <h2>هل خريطة الموقع تضمن الفهرسة؟</h2>
      <p>
        لا؛ هي اقتراح وليست أمرًا. لكنها تسرّع الاكتشاف خصوصًا للمواقع الكبيرة أو الصفحات الجديدة.
      </p>
      <h2>ماذا أفعل مع «مكتشفة - غير مفهرسة حاليًا»؟</h2>
      <p>
        قلّل الصفحات منخفضة القيمة، قوِّ الروابط الداخلية للصفحة، حسّن عمق المحتوى وتفرده، وتأكد من سرعة استجابة الخادم.
      </p>
    </>
  );
}

export function IndexingFaqEn() {
  return (
    <>
      <Answer>
        <strong>Short answer:</strong> If pages are missing from Google, check indexing status in Google Search Console
        first, then robots.txt, noindex tags, canonicals and content quality before anything else.
      </Answer>
      <h2>Why is my page not indexed?</h2>
      <p>
        Common causes: blocked in robots.txt, a noindex tag, a canonical pointing elsewhere, an orphan page with no
        internal links, thin or duplicate content, or a new site that has not earned trust yet.
      </p>
      <h2>Crawling vs. indexing</h2>
      <p>
        Crawling is fetching the page. Indexing is the decision to store and serve it. A page can be crawled and still
        left out if it adds nothing new.
      </p>
      <h2>Does a sitemap guarantee indexing?</h2>
      <p>
        No. A sitemap is a suggestion, not an instruction, but it speeds up discovery on large sites and for new pages.
      </p>
      <h2>How do I handle "Discovered — currently not indexed"?</h2>
      <p>
        Reduce low-value URLs, add internal links to the page, deepen and differentiate the content, and make sure the
        server responds quickly.
      </p>
    </>
  );
}

/* 5. Ecommerce SEO FAQ */

export function EcommerceSeoFaqAr() {
  return (
    <>
      <Answer>
        <strong>الإجابة المختصرة:</strong> أهم ثلاث أولويات في سيو المتاجر هي: بنية فئات واضحة، صفحات منتج بمحتوى فريد
        وبيانات منظمة، والتحكم في صفحات الفلاتر حتى لا تستنزف ميزانية الزحف.
      </Answer>
      <h2>هل أفهرس صفحات الفلاتر؟</h2>
      <p>
        افهرس فقط التركيبات التي لها طلب بحث حقيقي مثل «حذاء جري رجالي مقاس ٤٣»، واستخدم canonical أو noindex لباقي
        التركيبات.
      </p>
      <h2>ماذا أفعل بالمنتجات غير المتوفرة؟</h2>
      <p>
        أبقِ الصفحة إذا كان المنتج سيعود، مع توضيح الحالة وبدائل مقترحة. إذا اختفى نهائيًا، وجّه ٣٠١ لأقرب صفحة فئة أو
        بديل.
      </p>
      <h2>هل الوصف المنقول من المورّد يضر؟</h2>
      <p>
        نعم غالبًا؛ نفس النص موجود في عشرات المتاجر. أضف تجربة استخدام، مقاسات فعلية، أسئلة العملاء، وصورًا خاصة.
      </p>
      <h2>هل أحتاج Product Schema؟</h2>
      <p>
        نعم للسعر والتوفر والتقييمات الحقيقية؛ لكنها تزيد الأهلية للنتائج الغنية ولا تضمنها، ويجب أن تطابق ما يظهر
        للمستخدم.
      </p>
    </>
  );
}

export function EcommerceSeoFaqEn() {
  return (
    <>
      <Answer>
        <strong>Short answer:</strong> The top three ecommerce SEO priorities are a clear category structure, product
        pages with unique content and structured data, and disciplined control of filter URLs so crawl budget is not
        wasted.
      </Answer>
      <h2>Should filtered pages be indexed?</h2>
      <p>
        Index only combinations with real search demand, such as "men's running shoes size 43". Canonicalise or noindex
        everything else.
      </p>
      <h2>What about out-of-stock products?</h2>
      <p>
        Keep the page when the product will return, state availability clearly and offer alternatives. If it is gone for
        good, 301 to the closest category or replacement.
      </p>
      <h2>Do supplier descriptions hurt?</h2>
      <p>
        Usually yes, because dozens of stores publish the same text. Add real usage detail, true sizing, customer
        questions and your own photography.
      </p>
      <h2>Is Product schema required?</h2>
      <p>
        Use it for price, availability and genuine reviews. It increases eligibility for rich results without
        guaranteeing them, and it must match what users actually see.
      </p>
    </>
  );
}

/* 6. Local SEO FAQ */

export function LocalSeoFaqAr() {
  return (
    <>
      <Answer>
        <strong>الإجابة المختصرة:</strong> الظهور في خرائط جوجل يعتمد على ملف Google Business Profile مكتمل ودقيق،
        وتطابق بيانات الاسم والعنوان والهاتف، ومراجعات حقيقية متجددة، وصفحة موقع تخدم نفس النية الجغرافية.
      </Answer>
      <h2>كيف أظهر في نتائج الخرائط؟</h2>
      <p>
        اضبط الفئة الأساسية بدقة، أكمل الخدمات ومناطق الخدمة والصور وساعات العمل، واجعل بيانات NAP متطابقة في كل مكان.
      </p>
      <h2>هل أحتاج صفحة لكل مدينة؟</h2>
      <p>
        فقط عندما يكون لديك خدمة فعلية أو خبرة أو أمثلة في تلك المدينة. نسخ نفس الصفحة مع تبديل اسم المدينة يضر أكثر مما
        ينفع.
      </p>
      <h2>ما أثر المراجعات؟</h2>
      <p>
        المراجعات المنتظمة والردود عليها ترفع الثقة والتحويل، ولغة المراجعات نفسها تساعد المحرك على فهم خدماتك.
      </p>
      <h2>هل يمكن الترتيب بدون عنوان فعلي؟</h2>
      <p>
        نعم عبر نموذج «مناطق الخدمة» في Google Business Profile، مع أن المنافسة قد تكون أصعب في نتائج الخرائط المحلية.
      </p>
    </>
  );
}

export function LocalSeoFaqEn() {
  return (
    <>
      <Answer>
        <strong>Short answer:</strong> Map visibility depends on a complete and accurate Google Business Profile,
        consistent name/address/phone data, a steady flow of genuine reviews, and a website page serving the same local
        intent.
      </Answer>
      <h2>How do I appear in the map pack?</h2>
      <p>
        Pick the primary category precisely, complete services, service areas, photos and hours, and keep NAP data
        identical everywhere it appears.
      </p>
      <h2>Do I need a page per city?</h2>
      <p>
        Only where you genuinely operate or have experience and examples. Duplicating one template with the city name
        swapped does more harm than good.
      </p>
      <h2>How much do reviews matter?</h2>
      <p>
        Consistent reviews and replies raise trust and conversion, and the language customers use helps engines
        understand what you actually do.
      </p>
      <h2>Can I rank without a physical address?</h2>
      <p>
        Yes, using the service-area business model in Google Business Profile, though local map competition can be
        tougher without a verified storefront.
      </p>
    </>
  );
}

export const faqSeoAeoArticleRegistry = {
  "seo-faq-basics-ar": SeoFaqBasicsAr,
  "seo-faq-basics-en": SeoFaqBasicsEn,
  "aeo-faq-ar": AeoFaqAr,
  "aeo-faq-en": AeoFaqEn,
  "seo-results-timeline-faq-ar": SeoTimelineFaqAr,
  "seo-results-timeline-faq-en": SeoTimelineFaqEn,
  "google-indexing-faq-ar": IndexingFaqAr,
  "google-indexing-faq-en": IndexingFaqEn,
  "ecommerce-seo-faq-ar": EcommerceSeoFaqAr,
  "ecommerce-seo-faq-en": EcommerceSeoFaqEn,
  "local-seo-faq-ar": LocalSeoFaqAr,
  "local-seo-faq-en": LocalSeoFaqEn,
};
