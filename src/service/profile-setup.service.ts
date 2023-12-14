/* eslint-disable @typescript-eslint/no-explicit-any */

import { apiService } from './api.service';
import {PROFILESETUP } from '../constants/url.constant';
import { IRecruiter, IUser, InsurancePlan, RelationResponse, SumInsuredList } from '../interfaces/profile-setup.interface';
import { IData } from '../interfaces/api.interface';
import { Requests } from '../interfaces/common.interface';

/*********************** PROFILE SETUP SERVICES START ************************ */

/**
 * @description Get relation list
 * @param {}
 * @return RelationResponse
 * @url api/Quote/GetRelations
 * @method POST
 */

export const getRelation = (): Promise<RelationResponse> => {
  return apiService.post<RelationResponse, object>(
    PROFILESETUP.GET_RELATION,{}
  );
};

/**
 * @description Get Sum Insured List
 * @param {}
 * @return SumInsuredList
 * @url api/Quote/GetSuminsuredList
 * @method POST
 */

export const getSumInsuredList = (): Promise<SumInsuredList> => {
  return apiService.post<SumInsuredList, object>(
    PROFILESETUP.GET_SUM_INSURED_LIST,{}
  );
};

/**
 * @description find Top Insurance Plan Save Detail
 * @param {}
 * @return []
 * @url api/PreQuote/SaveDetails
 * @method POST
 */

export const PlanSaveDetail = (data: IUser): Promise<IRecruiter[]> => {
  return apiService.post<IRecruiter[], object>(
    PROFILESETUP.SAVE_DETAILS,
    data,
  );
};
/**
 * @description Get all Plans
 * @param {}
 * @return IRecruiter[]
 * @url api/Quote/FetchQuotes?Enquiryno=id
 * @method GET
 */

export const getAllRecruiters = (
  req?: Requests
): Promise<IData<IRecruiter[]>> => {
  return apiService.get<IData<IRecruiter[]>, object>(
    PROFILESETUP.ACTIONS,
    req
  );
};

/**
 * @description get All Plans by Enquiryno
 * @param id
 * @return IRecruiter[]
 * @url api/Quote/FetchQuotes?Enquiryno=id
 * @method GET
 */

export const getPlanById = (value:number): Promise<InsurancePlan> => {
  return apiService.get<InsurancePlan, object>(
    `${PROFILESETUP.GET_PLAN_BY_ID}?Enquiryno=${value}`,
  );
};

/**
 * @description get All Plans by Enquiryno
 * @param id
 * @return IRecruiter[]
 * @url api/Quote/FetchQuotes?Enquiryno=id
 * @method GET
 */

export const getRecruiterById = (id: string): Promise<IData<IRecruiter[]>> => {
  return apiService.get<IData<IRecruiter[]>, object>(
    `${PROFILESETUP.ACTIONS}/${id}`,
  );
};

/**
 * @description Update recruiter
 * @param id
 * @return IRecruiter[]
 * @url /recruiter/id
 * @method PATCH
 */

export const updateRecruiter = (
  id: string,
  data: IUser
): Promise<IRecruiter[]> => {
  return apiService.patch<IRecruiter[], object>(
    `${PROFILESETUP.ACTIONS}/${id}`,
    data,
  );
};

/**
 * @description Delte recruiter by id
 * @param id
 * @return acknowledged: boolean; deletedCount: number
 * @url /recruiter/id
 * @method DELETE
 */

export const deleteRecruiter = (
  id: string
): Promise<{
  acknowledged: boolean;
  deletedCount: number;
}> => {
  return apiService.delete<
    { acknowledged: boolean; deletedCount: number },
    object
  >(`${PROFILESETUP.ACTIONS}/${id}`);
};

/** ********************* ADMIN SERVICES END ************************ */
