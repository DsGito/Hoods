import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  User,
  Calendar,
  FileText,
  DollarSign,
  Users,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Check,
  ChevronsUpDown,
} from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type BusinessType = 'private' | 'commercial';
type KitchenType = 'indoor' | 'outdoor' | 'both';
type ServiceType = 'new_installation' | 'renovation' | 'maintenance' | 'consulting';

interface FormData {
  businessType: BusinessType | null;
  kitchenType: KitchenType | null;
  services: ServiceType[];
  budget: string;
  projectTimeline: string;
  contactInfo: {
    name: string;
    phone: string;
    email: string;
  };
}

const budgetRanges = [
  { value: "0-50", label: "עד 50 אלף ₪" },
  { value: "50-100", label: "50-100 אלף ₪" },
  { value: "100-200", label: "100-200 אלף ₪" },
  { value: "200+", label: "מעל 200 אלף ₪" },
];

const timelineRanges = [
  { value: "immediate", label: "מיידי" },
  { value: "1-3", label: "1-3 חודשים" },
  { value: "3-6", label: "3-6 חודשים" },
  { value: "6+", label: "מעל 6 חודשים" },
];

const Combobox = ({ 
  value, 
  onChange, 
  options, 
  placeholder 
}: { 
  value: string; 
  onChange: (value: string) => void; 
  options: { value: string; label: string; }[]; 
  placeholder: string; 
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandEmpty>לא נמצאו תוצאות</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={(currentValue) => {
                  onChange(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === option.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const StepOption = ({ 
  selected, 
  onClick, 
  title, 
  description,
  icon,
  children,
}: { 
  selected: boolean; 
  onClick: () => void; 
  title: string; 
  description: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}) => (
  <div
    onClick={onClick}
    className={`w-full p-6 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
      selected
        ? 'border-blue-600 bg-gradient-to-r from-blue-50 to-white shadow-md transform scale-[1.02]'
        : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50/50'
    }`}
  >
    <div className="flex items-center justify-between">
      <div>
        <h3 className={`text-xl font-bold mb-2 ${selected ? 'text-blue-600' : 'text-gray-900'}`}>
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
      {icon || (selected && (
        <CheckCircle
          className={`h-6 w-6 transition-colors ${
            selected ? 'text-blue-600' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
    {children}
  </div>
);

const ServiceOption = ({
  selected,
  onClick,
  title,
  description,
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  description: string;
}) => (
  <div
    onClick={onClick}
    className={`w-full p-6 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
      selected
        ? 'border-blue-600 bg-gradient-to-r from-blue-50 to-white shadow-md transform scale-[1.02]'
        : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50/50'
    }`}
  >
    <div className="flex items-center justify-between">
      <div>
        <h3 className={`text-xl font-bold mb-2 ${selected ? 'text-blue-600' : 'text-gray-900'}`}>
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <CheckCircle
        className={`h-6 w-6 transition-colors ${
          selected ? 'text-blue-600' : 'text-gray-300'
        }`}
      />
    </div>
  </div>
);

const InputField = ({
  label,
  type,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-full p-3 border-2 rounded-lg transition-colors duration-200
        border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-200
        placeholder-gray-400"
      placeholder={placeholder}
    />
  </div>
);

const SelectField = ({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string; }[];
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <select
      value={value}
      onChange={onChange}
      className="w-full p-3 border-2 rounded-lg transition-colors duration-200
        border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-200
        bg-white"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const ActionButton = ({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      px-6 py-3 rounded-lg font-medium transition-all duration-200
      ${disabled 
        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
        : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-600 transform hover:scale-[1.02]'
      }
    `}
  >
    {children}
  </button>
);

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    businessType: null,
    kitchenType: null,
    services: [],
    budget: '',
    projectTimeline: '',
    contactInfo: {
      name: '',
      phone: '',
      email: '',
    },
  });

  const steps = [
    {
      title: 'סוג המנדף',
      description: 'איזה סוג מנדף אתה מעוניין?',
      icon: <Building2 className="h-6 w-6" />,
    },
    {
      title: 'סוג המטבח',
      description: 'איזה סוג מטבח אתה מעוניין?',
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: 'שירותים נדרשים',
      description: 'איזה שירות אתה מחפש?',
      icon: <FileText className="h-6 w-6" />,
    },
    {
      title: 'פרטי הפרויקט',
      description: 'מידע על התקציב ולוח הזמנים',
      icon: <DollarSign className="h-6 w-6" />,
    },
    {
      title: 'פרטי התקשרות',
      description: 'כיצד נוכל ליצור איתך קשר?',
      icon: <User className="h-6 w-6" />,
    },
  ];

  const toggleService = (service: ServiceType) => {
    setFormData(prev => {
      const services = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      // כאן תוכל להוסיף את הלוגיקה לשליחת הטופס
      console.log('Form submitted:', formData);
      // לדוגמה:
      // await submitForm(formData);
      // router.push('/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.businessType !== null;
      case 2:
        return formData.kitchenType !== null;
      case 3:
        return formData.services.length > 0;
      case 4:
        return formData.budget && formData.projectTimeline;
      case 5:
        return (
          formData.contactInfo.name &&
          formData.contactInfo.phone &&
          formData.contactInfo.email
        );
      default:
        return false;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StepOption
              selected={formData.businessType === 'private'}
              onClick={() => {
                setFormData({ ...formData, businessType: 'private' });
                handleNext();
              }}
              title="מטבח פרטי"
              description="מטבח לבית פרטי או דירה"
              icon={<Building2 className={`h-6 w-6 ${formData.businessType === 'private' ? 'text-blue-600' : 'text-gray-300'}`} />}
            />
            <StepOption
              selected={formData.businessType === 'commercial'}
              onClick={() => {
                setFormData({ ...formData, businessType: 'commercial' });
                handleNext();
              }}
              title="מטבח מסחרי"
              description="מטבח למסעדה, בית קפה או עסק"
              icon={<Building2 className={`h-6 w-6 ${formData.businessType === 'commercial' ? 'text-blue-600' : 'text-gray-300'}`} />}
            />
          </div>
        );

      case 2:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StepOption
              selected={formData.kitchenType === 'indoor'}
              onClick={() => {
                setFormData({ ...formData, kitchenType: 'indoor' });
                handleNext();
              }}
              title="מטבח פנים"
              description="מטבח לחלל הפנימי"
            />
            <StepOption
              selected={formData.kitchenType === 'outdoor'}
              onClick={() => {
                setFormData({ ...formData, kitchenType: 'outdoor' });
                handleNext();
              }}
              title="מטבח חוץ"
              description="מטבח למרפסת או לחצר"
            />
            <StepOption
              selected={formData.kitchenType === 'both'}
              onClick={() => {
                setFormData({ ...formData, kitchenType: 'both' });
                handleNext();
              }}
              title="משולב"
              description="מטבח פנים וחוץ"
            />
          </div>
        );

      case 3:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceOption
              selected={formData.services.includes('new_installation')}
              onClick={() => toggleService('new_installation')}
              title="התקנה חדשה"
              description="תכנון והתקנת מטבח חדש"
            />
            <ServiceOption
              selected={formData.services.includes('renovation')}
              onClick={() => toggleService('renovation')}
              title="שיפוץ"
              description="שדרוג או שיפוץ מטבח קיים"
            />
            <ServiceOption
              selected={formData.services.includes('maintenance')}
              onClick={() => toggleService('maintenance')}
              title="תחזוקה"
              description="שירותי תחזוקה ותיקונים"
            />
            <ServiceOption
              selected={formData.services.includes('consulting')}
              onClick={() => toggleService('consulting')}
              title="ייעוץ"
              description="ייעוץ מקצועי לתכנון המטבח"
            />
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <Combobox
              value={formData.budget}
              onChange={(value) => setFormData({ ...formData, budget: value })}
              options={budgetRanges}
              placeholder="בחר טווח תקציב"
            />
            <Combobox
              value={formData.projectTimeline}
              onChange={(value) => setFormData({ ...formData, projectTimeline: value })}
              options={timelineRanges}
              placeholder="מתי תרצה להתחיל?"
            />
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <InputField
              label="שם מלא"
              type="text"
              value={formData.contactInfo.name}
              onChange={(e) => setFormData({
                ...formData,
                contactInfo: { ...formData.contactInfo, name: e.target.value }
              })}
              placeholder="הכנס את שמך המלא"
            />
            <InputField
              label="טלפון"
              type="tel"
              value={formData.contactInfo.phone}
              onChange={(e) => setFormData({
                ...formData,
                contactInfo: { ...formData.contactInfo, phone: e.target.value }
              })}
              placeholder="הכנס מספר טלפון"
            />
            <InputField
              label="דוא״ל"
              type="email"
              value={formData.contactInfo.email}
              onChange={(e) => setFormData({
                ...formData,
                contactInfo: { ...formData.contactInfo, email: e.target.value }
              })}
              placeholder="הכנס כתובת דוא״ל"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`flex items-center ${
                  index < steps.length - 1 ? 'w-full' : ''
                }`}
              >
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                    currentStep > index + 1
                      ? 'border-blue-600 bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md'
                      : currentStep === index + 1
                      ? 'border-blue-600 text-blue-600 shadow-sm'
                      : 'border-gray-300 text-gray-300'
                  }`}
                >
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-4 rounded-full transition-colors duration-200 ${
                      currentStep > index + 1
                        ? 'bg-gradient-to-r from-blue-600 to-blue-500'
                        : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-2">{steps[currentStep - 1].title}</h2>
          <p className="text-gray-600 mb-6">{steps[currentStep - 1].description}</p>
          {renderStepContent()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            variant="outline"
            className="flex items-center"
          >
            <ArrowLeft className="h-4 w-4 ml-2" />
            חזור
          </Button>
          
          {currentStep === steps.length ? (
            <Button
              onClick={handleSubmit}
              disabled={!isStepValid()}
              className="flex items-center"
            >
              שלח
              <CheckCircle className="h-4 w-4 mr-2" />
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="flex items-center"
            >
              המשך
              <ArrowRight className="h-4 w-4 mr-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
