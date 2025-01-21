import {IFilter} from "./SearchTrainer.tsx";

export interface ITrainer {
    id: number,
    name: string,
    profile: string,
    photo: string,
    isActive: boolean,
    forMan: boolean,
    forWoman: boolean,
}

interface IProps {
    filter: IFilter,
    trainers: ITrainer[],
}

export const AllTrainers = ({trainers, filter}: IProps) => {

    const filteredTrainers =  trainers.filter((item: ITrainer) => (item.forWoman === filter.forWoman) && (item.forMan === filter.forMan) && (item.isActive === filter.isActive) && (item.name.toLowerCase().includes(filter.trainerName.toLowerCase()) ))

    if (filteredTrainers.length === 0) return (<p>По вашему запросу ничго не найдено</p>)

    return (filteredTrainers.map((el: ITrainer) =>

            <div className="allTrainers" key={el.id}>
                <img src={el.photo} alt={el.name} />
                <p>{el.name}</p>
                <p>{el.profile}</p>
            </div>

        )
    )
}