// /app/page.tsx
export default function HomePage() {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-4xl font-bold">Supakorn Hanprasert</h1>
      <img 
        src="/avatar.jpg" // ใช้เส้นทางที่ถูกต้องสำหรับไฟล์ภาพของคุณ
        className="w-40 h-40 rounded-full object-cover border-4 border-blue-600 mt-8 ml-6 "
        data-aos="flip-right" // ใช้ AOS attribute เพื่อกำหนดอนิเมชั่น
        data-aos-delay="200" // ใช้ data-aos-delay เพื่อกำหนดความล่าช้าของอนิเมชั่น
      />
      <p className="mt-4 text-lg">This is the homepage of my portfolio.</p>
    </div>
  );
}
