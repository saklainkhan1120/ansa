import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SwimIcon } from "@/components/ui/icons";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-slate-50 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mx-auto border border-teal-200">
          <SwimIcon className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          The swimming academy page or venue you are looking for may have moved or is being updated.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/">
            <Button variant="primary" size="md">
              Return to Homepage
            </Button>
          </Link>
          <Link href="/programmes">
            <Button variant="outline" size="md">
              View Programmes
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
