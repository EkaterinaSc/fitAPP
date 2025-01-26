import {useState, useEffect} from "react";
import {AllTrainers} from '../allTrainers/AllTrainers.tsx'
import {IFilter, SearchTrainer} from "../searchTrainers/SearchTrainer.tsx";
import {ITrainer} from '../allTrainers/AllTrainers.tsx';
import '../trainers_list.scss';

export const GetTrainers = () => {
    const [trainers, setTrainers] = useState<ITrainer[]>([]);
    const [filter, setFilter] = useState<IFilter>({
            trainerName: '',
            isActive: true,
            forMan: true,
            forWoman: true,
            showAll: true,
    });

    const url: string = 'https://mocki.io/v1/a686afea-bc6c-4b91-9a4e-0b9d52b9e5fb';

    const loadTrainers = async (url: string) => {
        try {const getData = await fetch(url);
            return await getData.json()}
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {loadTrainers(url).then(data => setTrainers(data))}, [])
    return (
        <>
            <SearchTrainer filter = {filter} setFilter = {setFilter} />
            <div className="allTrainers">
                <AllTrainers trainers = {trainers} filter = {filter} />
            </div>

        </>

    )}




