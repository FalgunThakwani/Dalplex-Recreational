import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BookingDetails } from '../interfaces/BookingDetails';
import { Slots } from '../interfaces/Slots';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  
  constructor(private http: HttpClient) { }

  getAllSlots() : Observable<Slots[]> {
    return of(this.populateDemoData());
  }

  getAllSlotsByDate(date: Date) : Observable<Slots[]>  {
    return of(this.populateDemoData().filter(slot => slot.date.toDateString() === date.toDateString()));
  }

  getBookingHistoryDetails() : Observable<BookingDetails[]> {
    return of([
      {id: '1', program: 'Badminton Court 3', offering: 'Fri, Jan 27 2023 7:00 AM to 8:00 AM', semesters: 'n/a', registeredOn: 'Thu, Jan 26 2023 11:04 PM', status: 'Paid'},
      {id: '2', program: 'Badminton Court 1', offering: 'Sat, Jan 21 2023 9:00 AM to 10:00 AM', semesters: 'n/a', registeredOn: 'Fri, Jan 20 2023 5:41 PM', status: 'Paid'}
    ]);
  }

  populateDemoData(): Slots[] {
    
    let timeIntervals: string[] = [];
    const numDays = 3;

    const today = new Date();
    today.setDate(today.getDate() + 1);

    // demo data for booked slots
    const bookedSlots = [
      {id: "1", interval: "6:00 AM - 7:00 AM", status: "booked", date: today},
      {id: "2", interval: "11:00 AM - 12:00 PM", status: "booked", date: today},
      {id: "3", interval: "4:00 PM - 5:00 PM", status: "booked", date: today}
    ];

    // generate all time intervals from 6AM to 10PM
    for (let i = 6; i < 22; i++) {
      let hour = i % 12;
      if (hour === 0) {
        hour = 12;
      }
      let startTime = hour + ':00 ' + (i >= 12 ? 'PM' : 'AM');
      let endTime = (hour + 1) + ':00 ' + (i >= 11 ? 'PM' : 'AM');
      timeIntervals.push(startTime + ' - ' + endTime);
    }

    const allSlots: Slots[] = Array.from({ length: numDays }, (_, i) => {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + i + 1);
    
      // Generate slots for the current date
      const slotsForDate = timeIntervals.map(interval => {
        const id = `${currentDate.getTime()}-${interval}`;
        const isBooked = bookedSlots.some(slot => {
          // Compare the date part of slot.date and currentDate
          const slotDate = new Date(slot.date);
          return slot.interval === interval && slotDate.toDateString() === currentDate.toDateString();
        });
        const status = isBooked ? "booked" : "available";
        return { id, interval, status, date: currentDate };
      });
    
      return slotsForDate;
    }).reduce((prev, curr) => prev.concat(curr), []);

    return allSlots;
  }
}
