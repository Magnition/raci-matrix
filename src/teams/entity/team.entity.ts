import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
@Entity()
export class TeamEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false})
    team: string;

    @Column({ nullable:false})
    description: string;

    @Column({ nullable:false})
    teamUrl: string;

    @Column({ nullable:false})
    email: string;
}
