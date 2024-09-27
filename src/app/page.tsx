import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <h1 className="text-2xl font-bold mb-20">Welcome!</h1>
          <h2 className="mb-10">Here you can:</h2>
          <li className="mb-2">
            Get insights on your bot's interaction with its users.
          </li>
          <li>See how your bot is performing by checking in each message.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="bg-green-600 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="http://127.0.0.1:3000/view_chats/bot01"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Bot01
          </a>
          <a
            className="bg-green-600 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="http://127.0.0.1:3000/view_chats/bot02"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Bot02
          </a>

        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div> </div>
      </footer>
    </div>
  );
}
