import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { inject, TestBed, waitForAsync } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { LabourCosts } from '../model/labourCosts.interfaces';
import { ApiService, baseUrl } from './api.service';
import { mock } from './mock.service';

describe('ApiService', () => {
  let api = environment['API'];

  let httpTestingController: HttpTestingController;
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it(`should get the same data than the api response`, waitForAsync(
    inject(
      [HttpTestingController, ApiService],
      (httpClient: HttpTestingController, apiService: ApiService) => {
        apiService?.getLabourCosts().subscribe(res => {
          expect(res.length).toBe(1);
          expect(res).toBe(mock);
        });
        const httpRequest = httpTestingController.expectOne(`${api}${baseUrl}`);
        expect(httpRequest.request.method).toBe('GET');
        httpClient.verify();
      }
    )
  ));
});
