import React from "react";
import { Users, Clock, MapPin, Phone } from "lucide-react";
import { Button } from "./Button";

interface ServiceCareCardProps {
  type: string;
  badge: string;
  description: string;
  stats: { label: string }[];
  image: string;
  primaryAction: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  className?: string;
  isWide?: boolean;
}

export const ServiceCareCard: React.FC<ServiceCareCardProps> = ({
  type,
  badge,
  description,
  stats,
  image,
  primaryAction,
  secondaryAction,
  className = "",
  isWide = true,
}) => {
  const badgeTextColor =
    badge.toLowerCase() === "weekly"
      ? "text-green-600"
      : badge.toLowerCase() === "scheduled"
        ? "text-amber-700"
        : "text-blue-600";
  
  const isUrgent =
    type.toLowerCase().includes("emergency") ||
    type.toLowerCase().includes("maternity");

  const renderActionLabel = (label: string) => {
    if (label.includes(":")) {
      const [title, value] = label.split(":");
      return (
        <span className="flex flex-wrap justify-center gap-x-1 leading-tight">
          <span className="opacity-95">{title}:</span>
          <span className="whitespace-nowrap">{value}</span>
        </span>
      );
    }
    return label;
  };

  return (
    <div
      className={`relative h-125 md:h-130 w-full rounded-4xl overflow-hidden group ${className}`}
    >
      <img
        src={image}
        alt={type}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-between">
        <div className="flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
              {type}
            </h3>
            <span
              className={`bg-white ${badgeTextColor} px-4 py-1.5 rounded-full text-xs font-bold shadow-sm shrink-0`}
            >
              {badge}
            </span>
          </div>

          <p className="text-white/90 text-base mb-6 max-w-sm leading-relaxed">
            {description}
          </p>

          <div className="space-y-3 text-white/90">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-start gap-3">
                {idx === 0 && <Users size={18} className="mt-0.5 shrink-0" />}
                {idx === 1 && <Clock size={18} className="mt-0.5 shrink-0" />}
                {idx === 2 && <MapPin size={18} className="mt-0.5 shrink-0" />}
                <span className="text-sm font-medium leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`flex w-full gap-3 mt-6 ${isWide ? "flex-row" : "flex-col"}`}
        >
          <Button
            to={primaryAction.href}
            className={`bg-[#4F7733] text-white text-sm py-3.5 px-4 ${
              isWide ? "flex-1" : "w-full"
            }`}
            icon={isUrgent ? <Phone size={18} className="shrink-0" /> : undefined}
          >
            {renderActionLabel(primaryAction.label)}
          </Button>
          
          <Button
            to={secondaryAction?.href || "/contact"}
            variant="outline"
            className={`border-white text-white text-sm py-3.5 px-4 hover:bg-white/10 ${
              isWide ? "flex-1" : "w-full"
            }`}
          >
            {renderActionLabel(secondaryAction?.label || "Contact us")}
          </Button>
        </div>
      </div>
    </div>
  );
};