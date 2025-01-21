export interface IFilter {
    trainerName: string;
    isActive: boolean;
    forMan: boolean;
    forWoman: boolean;
}

interface IProps {
    filter: IFilter,
    setFilter: (filter: IFilter) => void,
}

export const SearchTrainer = ({filter, setFilter} : IProps ) => {
    return (
        <div>
            <form>
                <input type="text" value={filter.trainerName} onChange={(e) => setFilter({...filter, trainerName: e.target.value})} />
                <input type="checkbox" checked={filter.isActive} onChange={(e) => setFilter({...filter, isActive: e.target.checked})} />
                <input type="checkbox" checked={filter.forMan} onChange={(e) => setFilter({...filter, forMan: e.target.checked})} />
                <input type="checkbox" checked={filter.forWoman} onChange={(e) => setFilter({...filter, forWoman: e.target.checked})} />
                <button onClick={(e) => e.preventDefault()}>Search!</button>
            </form>
        </div>
    )
}