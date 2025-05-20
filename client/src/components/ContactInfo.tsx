import { useAnimationOnScroll } from "@/hooks/use-animation-on-scroll";
import { businessHours, companyInfo } from "@/lib/data";
import { cn, formatPhoneNumber } from "@/lib/utils";
import { RectangleEllipsis, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
  const { ref: contactRef, isVisible: contactVisible } = useAnimationOnScroll();
  const { ref: hoursRef, isVisible: hoursVisible } = useAnimationOnScroll();

  return (
    <>
      <div
        ref={contactRef}
        className={cn(
          "bg-white rounded-lg shadow-md p-8 mb-8 animate-on-scroll",
          contactVisible && "visible"
        )}
      >
        <h3 className="text-2xl font-bold text-neutral-900 font-heading mb-6">
          Contact Information
        </h3>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="text-primary text-xl mr-4 mt-1">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-neutral-900 mb-1">Office Address</h4>
              <p className="text-neutral-700">
                {companyInfo.address}
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="text-primary text-xl mr-4 mt-1">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-neutral-900 mb-1">Phone</h4>
              <p className="text-neutral-700">
                Mobile:{" "}
                <a href={`tel:${companyInfo.phone}`} className="hover:text-primary">
                  {formatPhoneNumber(companyInfo.phone)}
                </a>
                <br />
                Landline:{" "}
                <a href={`tel:${companyInfo.landline}`} className="hover:text-primary">
                  {formatPhoneNumber(companyInfo.landline)}
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="text-primary text-xl mr-4 mt-1">
              <RectangleEllipsis className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-neutral-900 mb-1">Email</h4>
              <p className="text-neutral-700">
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-primary"
                >
                  {companyInfo.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={hoursRef}
        className={cn(
          "bg-white rounded-lg shadow-md p-8 animate-on-scroll",
          hoursVisible && "visible"
        )}
      >
        <h3 className="text-2xl font-bold text-neutral-900 font-heading mb-6">
          Business Hours
        </h3>
        <div className="space-y-3">
          {businessHours.map((item, index) => (
            <div key={index} className="flex justify-between">
              <span className="text-neutral-700 font-medium">{item.day}</span>
              <span className="text-neutral-700">{item.hours}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
