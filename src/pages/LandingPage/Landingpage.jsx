import CountUp from "react-countup";
import yellowBox from "../../assets/box-yellow.svg";
import image1 from "../../assets/image1.png";
import one from "../../assets/landingPage/1.jpeg";
import two from "../../assets/landingPage/2.jpeg";
import three from "../../assets/landingPage/3.jpg";
import video from "../../assets/landingPage/main.mp4";
import whiteBox from "../../assets/landingPage/box-white.svg";
import { useInView } from "react-intersection-observer";
import logistics from "../../assets/landingPage/logistics.webp";
import brandIcon from "../../assets/landingPage/brandIcon.svg";
import brandIcon2 from "../../assets/landingPage/brandIcon2.svg";
import Accordion from "../../components/accordion";

export default function Landingpage() {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <>
      {/* Hero Section titles */}
      <div className="container mx-auto py-40">
        <h1 className="text-4xl text-white max-w-[480px] font-medium leading-normal">
          حلول لوجستية سهلة، وموثوقة، وبأسعار تنافسية
        </h1>
        <p className="text-white py-4 max-w-[480px]">
          اكتشف كيف يمكننا مساعدتك على تنمية أعمالك وزيادة أرباحك من خلال حلولنا
          الاحترافية وشبكتنا اللوجستية العالمية
        </p>
      </div>

      {/* color gradient div */}
      <div className="h-36 w-full bg-gradient-to-b from-transparent to-[#0054A6]" />

      <div className="bg-[#0054A6]">
        <div className="mx-8 py-20 bg-white rounded-xl relative">
          {/* Input dev  */}
          <div className="bg-[#FFC22E] flex items-center p-5 rounded-lg w-[75%] mx-40 gap-6 absolute -top-12">
            <div className="relative z-0 w-full">
              <input
                type="text"
                id="floating_standard"
                className="block flex-1 py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-700 appearance-none text-black  focus:outline-none focus:ring-0 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_standard"
                className="absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                رقم الشحنة
              </label>
            </div>
            <button className="bg-white font-semibold rounded-md w-40 p-3 text-blue-800 hover:text-gray-950">
              تابع شحنتك
            </button>
          </div>

          <div className="flex items-center justify-center py-8">
            {/* Section One */}
            <div className="container mx-auto flex items-center justify-between gap-10">
              <div className="flex-1">
                <img
                  src={image1}
                  alt="truck"
                  height={400}
                  className="h-[320px] w-full shadow-xl rounded-lg"
                />
              </div>
              <div className="flex-1">
                <img src={yellowBox} alt="box" className="mb-3" />
                <h2 className="text-3xl text-black font-bold">
                  شعارنا هو:
                  <span className="text-blue-800">
                    &quot; لا تشيل هم، وصلت!&quot;
                  </span>
                </h2>
                <p className="text-base text-gray-600 py-4">
                  تُعد &quot;LimitLess&quot;. وخلال وقت قصير، نجحت الشركة في
                  تحقيق الريادة في مجال الشحن والخدمات اللوجستية إذ تقدم خدماتها
                  لمئات العملاء حول العالم. واليوم، تحظى الشركة بثقة أكثر من 500
                  عميل يعتمدون على خدمات &quot;LimitLess&quot; الاحترافية لنقل
                  بضائعهم بسهولة وسرعة وأمان، مما يتيح لهم تنمية شركاتهم وتوسيع
                  نطاق أعمالهم
                </p>
              </div>
            </div>
          </div>
          {/* Section Two (Three images) */}
          <div className="flex items-center my-28">
            <div className="flex-1 w-1/3 relative group overflow-hidden">
              <img src={one} alt="" className="w-full h-[350px] object-cover" />
              <div className="absolute bottom-0 w-full bg-black opacity-20 h-full" />
              <h3 className="absolute z-10 bottom-0 text-white text-3xl m-5 group-hover:-translate-y-20 duration-500">
                شبكة عالمية
              </h3>
              <div className="bg-yellow-400 absolute bottom-0 w-full h-full translate-y-96 transform group-hover:-translate-y-0 duration-500 flex items-end pb-12">
                <p className="text-black mx-5 max-w-96">
                  تنتشر مكاتب و مراكز التوزيع التابعة للميتليس لوجيستكس في معظم
                  الوجهات الاقتصادية الرئيسية حول العالم
                </p>
              </div>
            </div>
            <div className="flex-1 w-1/3 relative group overflow-hidden">
              <img src={two} alt="" className="w-full h-[350px] object-cover" />
              <div className="absolute bottom-0 w-full bg-black opacity-20 h-full" />
              <h3 className="absolute z-10 bottom-0 text-white text-3xl m-5 group-hover:-translate-y-32 duration-500">
                حلول مرنة
              </h3>
              <div className="bg-yellow-400 absolute bottom-0 w-full h-full translate-y-96 transform group-hover:-translate-y-0 duration-500 flex items-end pb-12">
                <p className="text-black mx-5 max-w-96">
                  تحرص LimitLess على توفير مجموعة متنوعة من حلول الشحن لتلبية
                  الاحتياجات المختلفة للعملاء، بدايةً من حلول التخزين وحتى خدمات
                  التوصيل من الباب للباب، أيًا كان نوع الشحنة أو الطرد المراد
                  توصيله
                </p>
              </div>
            </div>
            <div className="flex-1 w-1/3 relative group overflow-hidden">
              <img
                src={three}
                alt=""
                className="w-full h-[350px] object-cover"
              />
              <div className="absolute bottom-0 w-full bg-black h-full opacity-20" />
              <h3 className="absolute z-10 bottom-0 text-white text-3xl m-5 group-hover:-translate-y-28 duration-500">
                سهولة فائقة
              </h3>
              <div className="bg-yellow-400 absolute bottom-0 w-full h-full translate-y-96 transform group-hover:-translate-y-0 duration-500 flex items-end pb-12">
                <p className="text-black mx-5 max-w-96">
                  تلتزم LimitLess بتقديم عملية شحن سهلة وبسيطة وخالية من
                  التعقيدات، بدايةً من إمكانية تنفيذ عملية الشحن دون الحاجة
                  لإنشاء حساب وحتى خيارات الدفع عند الاستلام
                </p>
              </div>
            </div>
          </div>
          {/* Section three video */}
          <div className="my-28 ">
            {/* yellow line above */}
            <div className="h-2 overflow-hidden">
              <span className="before:content-[''] before:bg-yellow-400 before:px-40 float-left" />
            </div>
            {/* video section */}
            <div className="relative">
              <video
                loop
                autoPlay
                muted
                className="object-cover w-full h-[500px]"
              >
                <source src={video} type="video/mp4" />
              </video>
              <div className="absolute bg-black w-full h-full top-0 opacity-50" />
              <div className="absolute bottom-0 h-44 w-full bg-gradient-to-b from-transparent to-[#0054A6]" />
              <div className="absolute top-0 pt-20 text-center w-full flex flex-col justify-center items-center">
                <img src={whiteBox} alt="whitebox" />
                <h2 className="text-yellow-500 text-3xl font-bold">
                  خدمات شحن آمنة وموثوقة
                </h2>
              </div>
              {/* number counter */}
              <div
                ref={statsRef}
                className="absolute w-full text-white text-center font-bold pb-16 bottom-0 grid grid-cols-5 justify-center px-20"
              >
                <div>
                  <p className="text-5xl">
                    {statsInView && <CountUp end={7} duration={2} />}
                    <span>M</span>+
                  </p>
                  <p>عميل نشط</p>
                </div>
                <div>
                  <p className="text-5xl">
                    {statsInView && <CountUp end={396} duration={2}></CountUp>}
                  </p>
                  <p>شاحنة</p>
                </div>
                <div>
                  <p className="text-5xl">
                    <span>+</span>
                    {statsInView && <CountUp end={500} duration={2} />}
                  </p>
                  <p>شركة متعاقدة</p>
                </div>
                <div>
                  <p className="text-5xl">
                    {statsInView && <CountUp end={1055} duration={2} />}
                  </p>
                  <p>موظفا</p>
                </div>
                <div>
                  <p className="text-5xl">
                    {statsInView && <CountUp end={117} duration={2} />}
                  </p>
                  <p>فرعا</p>
                </div>
              </div>
            </div>

            {/* yellow line under */}
            <div className="h-2 overflow-hidden">
              <span className="before:content-[''] before:bg-yellow-400 before:px-40 float-right" />
            </div>
          </div>
          {/*  */}
          <div className="my-28">
            <div
              className="relative bg-cover bg-center h-[800px] w-full"
              style={{ backgroundImage: `url(${logistics})` }}
            >
              <div className="bg-yellow-500 w-full top-0 h-full opacity-95" />
              <div className="absolute top-0 w-full flex flex-col pt-16 justify-center items-center">
                <img src={whiteBox} alt="whitebox" />
                <h2 className="text-gray-800 text-3xl font-bold">
                  احصل على كافة احتياجاتك اللوجستية في مكانٍ واحد
                </h2>
              </div>
              <img
                src={brandIcon}
                alt=""
                className="absolute top-36 right-10"
                width={277}
                height={192}
              />
              <img
                src={brandIcon2}
                alt=""
                className="absolute -bottom-20 right-10"
                width={503}
                height={200}
              />
              <div className="w-full absolute top-0">
                <Accordion />
                {/* <div className="max-w-[1100px] relative mx-auto flex mt-44 overflow-hidden rounded-xl h-[500px]">
                  <div className="flex-1 px-8 z-20 pt-20 max-w-[40%] bg-[#02232A] text-white space-y-8">
                    <div>
                      <div className="flex items-center gap-4">
                        <p className="text-2xl">+</p>
                        <h1 className="font-bold text-2xl">
                          التجارة الإلكترونية
                        </h1>
                      </div>
                      <h6 className="mt-4 w-[80%] text-sm">
                        باعتبارها أول شركة خاصة لتقديم خدمات البريد بالمملكة،
                        تسخر &apos;زاجل&apos; كافة خبراتها وإمكاناتها وشبكتها
                        العالمية الهائلة لتقديم مجموعة متكاملة من الحلول الل...
                      </h6>
                    </div>
                    <div>
                      <div className="flex items-center gap-4">
                        <p className="text-2xl">+</p>
                        <h1 className="font-bold text-2xl">شحن البضائع </h1>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-4">
                        <p className="text-2xl">+</p>
                        <h1 className="font-bold text-2xl">
                          التخزين و التوزيع
                        </h1>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-4">
                        <p className="text-2xl">+</p>
                        <h1 className="font-bold text-2xl">التوزيع الداخلي </h1>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-full h-[500px]">
                    <img
                      src={image}
                      alt=""
                      className="absolute right-0 h-full"
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
