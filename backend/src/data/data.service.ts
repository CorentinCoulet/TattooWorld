import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {
    private data: any[] = [];

    getAllData(): any[] {
        return this.data;
    }

    getDataById(id: string): any {
        return this.data.find(item => item.id === id);
    }

    addData(newData: any): void {
        this.data.push(newData);
    }

    updateData(id: string, updatedData: any): void {
        const index = this.data.findIndex(item => item.id === id);
        if (index !== -1) {
            this.data[index] = updatedData;
        }
    }

    deleteData(id: string): void {
        this.data = this.data.filter(item => item.id !== id);
    }
}
