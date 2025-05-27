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
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 px-4 lg:px-6">
      {cards.map((card, i) => (
        <Card key={i} className="@container/card bg-gradient-to-t from-primary/5 to-card dark:bg-card shadow-sm">
          <CardHeader className="relative">
            <CardDescription>{card.description}</CardDescription>
            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
              {card.value}
            </CardTitle>
            <div className="absolute right-4 top-4">
              <Badge
                variant="outline"
                className="flex gap-1 rounded-lg text-xs"
              >
                {card.trending === "up" ? (
                  <TrendingUpIcon className="size-3" />
                ) : (
                  <TrendingDownIcon className="size-3" />
                )}
                {card.badge}
              </Badge>
            </div>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              {card.footerLabel}{" "}
              {card.trending === "up" ? (
                <TrendingUpIcon className="size-4" />
              ) : (
                <TrendingDownIcon className="size-4" />
              )}
            </div>
            <div className="text-muted-foreground">{card.footerNote}</div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

const cards = [
  {
    description: "Total Revenue",
    value: "$1,250.00",
    badge: "+12.5%",
    trending: "up",
    footerLabel: "Trending up this month",
    footerNote: "Visitors for the last 6 months",
  },
  {
    description: "New Customers",
    value: "1,234",
    badge: "-20%",
    trending: "down",
    footerLabel: "Down 20% this period",
    footerNote: "Acquisition needs attention",
  },
  {
    description: "Active Accounts",
    value: "45,678",
    badge: "+12.5%",
    trending: "up",
    footerLabel: "Strong user retention",
    footerNote: "Engagement exceed targets",
  },
  {
    description: "Growth Rate",
    value: "4.5%",
    badge: "+4.5%",
    trending: "up",
    footerLabel: "Steady performance",
    footerNote: "Meets growth projections",
  },
];
