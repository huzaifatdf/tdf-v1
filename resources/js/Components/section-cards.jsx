import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 px-4 lg:px-8">
      {cards.map((card, i) => (
        <Card
          key={i}
          className={`
            @container/card relative rounded-2xl border border-border/20 
            bg-gradient-to-br from-muted/10 to-card/30 dark:from-background/40 dark:to-card/10 
            backdrop-blur-md shadow-sm 
            hover:shadow-xl hover:scale-[1.015] transition-all duration-300 ease-in-out
            group
          `}
        >
          <CardHeader className="relative p-6 pb-3">
            <CardDescription className="text-muted-foreground text-sm mb-1">
              {card.description}
            </CardDescription>
            <CardTitle className="@[300px]/card:text-4xl text-3xl font-semibold tracking-tight tabular-nums">
              {card.value}
            </CardTitle>

            <div className="absolute right-4 top-4">
              <Badge
                variant="outline"
                className={`flex items-center gap-1 rounded-full border px-2 py-1 text-xs font-medium shadow-sm ${
                  card.trending === "up"
                    ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400"
                    : "bg-rose-50 text-rose-700 dark:bg-rose-900/20 dark:text-rose-400"
                }`}
              >
                {card.trending === "up" ? (
                  <TrendingUpIcon className="size-3.5" />
                ) : (
                  <TrendingDownIcon className="size-3.5" />
                )}
                {card.badge}
              </Badge>
            </div>
          </CardHeader>

          <CardFooter className="flex flex-col items-start gap-1 px-6 pb-6 pt-0 text-sm">
            <div
              className={`flex items-center gap-1 font-medium ${
                card.trending === "up"
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-rose-600 dark:text-rose-400"
              }`}
            >
              {card.footerLabel}
              {card.trending === "up" ? (
                <TrendingUpIcon className="size-4" />
              ) : (
                <TrendingDownIcon className="size-4" />
              )}
            </div>
            <div className="text-xs text-muted-foreground">
              {card.footerNote}
            </div>
          </CardFooter>

          {/* Progress bar with hover animation */}
          <div className="absolute bottom-0 left-0 w-full h-1.5 bg-border/10 overflow-hidden rounded-b-2xl">
            <div
              className={`
                h-full rounded-r-xl transition-all duration-700 ease-out 
                ${card.trending === "up" ? "bg-emerald-500" : "bg-rose-500"} 
                group-hover:w-full
              `}
              style={{
                width: card.trending === "up" ? "85%" : "60%",
              }}
            />
          </div>
        </Card>
      ))}
    </div>
  );
}

const cards = [
  {
    description: "Total Pages",
    value: "5",
    badge: "+12.5%",
    trending: "up",
    footerLabel: "Content expanding steadily",
    footerNote: "Growth over the last 6 months",
  },
  {
    description: "Total Services",
    value: "12",
    badge: "-20%",
    trending: "down",
    footerLabel: "Slight drop in service listings",
    footerNote: "Review offerings and updates",
  },
  {
    description: "Total Products",
    value: "40",
    badge: "+12.5%",
    trending: "up",
    footerLabel: "Inventory growing steadily",
    footerNote: "Strong catalog development",
  },
  {
    description: "Total Users",
    value: "2",
    badge: "+4.5%",
    trending: "up",
    footerLabel: "New users this week",
    footerNote: "On track with onboarding goals",
  },
];

