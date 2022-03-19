import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
@Entity()
export class TaskEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false})
    task: string;

    @Column({ nullable:false})
    description: string;
}
