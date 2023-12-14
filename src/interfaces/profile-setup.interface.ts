export interface IRecruiter {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    photo: string;
    isVerified: boolean;
    isActive: boolean;
    role: string;
    passwordChangedAt: Date;
    resetPasswordToken: string;
    resetPasswordExpire: Date;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface IUser {
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    isSelected?: string;
    photo?: string;
    experience?: string;
    currentCompany?: string;
    currentCTC?: string;
    expectedCTC?: string;
  }
  
  export interface RelationState{
    RelationID: number;
    RelationType: string;
  };

  export interface  RelationResponse {
    Relations: RelationState[]; 
  }
  export interface SumInsuredState{
    Suminsureds:string
  }
  export interface SumInsuredList{
    Suminsured: SumInsuredState[]; 
  }


  export interface EnquiryDetails{
    PersonRelation: string;
    Dob: string;
    Age: string;
    Suminsured: string;
    Gender: string;
    MaritalStatus: string;
    Pincode: string;
    IsPreExisiting: boolean;
  };
  
  export interface FilterValue {
    FilterValues: string;
  };
  
  export interface Filter{
    FilterType: string;
    FilterKey_in_Json: string;
    filtersValues: FilterValue[];
  };
  
  export interface QuotesResult {
    DirectDiscount: number;
    PlanID: string;
    PlanName: string;
    Suminsured: number;
    BasicPremium: number;
    TotalDiscount: number;
    TotalPremium: number;
    GST: number;
    GSTPer: number;
    NetAmount: number;
    SecondYearPremium: number;
    ThirdYearPremium: number;
    MonthlyPremium: number;
    QuarterlyPremium: number;
    SemiPremium: number;
    Payoption: string;
    ClaimRatio: string;
    Covid19cover: string;
    RoomRentLimit: string;
    Icucharge: string;
    Restorationcover: string;
    ncb: string;
    RenewalDiscount: string;
    Copay: string;
    PreHospCover: string;
    PostHospCover: string;
    DayCareCover: string;
    HospitalHome: string;
    DomiHospital: string;
    AmbulanceCharges: string;
    MaternityCover: string;
    WorldWideCoverage: string;
    Econsultation: string;
    NewBornBabycover: string;
    Criticalillness: string;
    PEDWaiting: string;
    AddonsPremiums: AddonPremium[];
  };
  
 export interface AddonPremium {
    AddonID: string;
    SubAddonID: string;
    AddonName: string;
    SubAddonName: string;
    AddonType: string;
    AddonAmount: number;
    SecondYearAddonPrem: number;
    ThirdYeardAddonPrem: number;
  };
  
  export interface CompanyList{
    CompanyId: string;
    CompanyName: string;
    CompanyImageURL: string;
    CashLesshospitalCount: string;
    QuotesResults: QuotesResult[];
  };
  
 export interface InsurancePlan{
    Enquiryno?: string;
    enquiryDetails?: EnquiryDetails[];
    filters?: Filter[];
    companiesLists?: CompanyList[];
  };
  