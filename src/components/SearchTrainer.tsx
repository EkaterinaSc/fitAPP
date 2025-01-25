export interface IFilter {
    trainerName: string;
    isActive: boolean;
    forMan: boolean;
    forWoman: boolean;
    showAll: boolean;
}

interface IProps {
    filter: IFilter,
    setFilter: (filter: IFilter) => void,
}

export const SearchTrainer = ({filter, setFilter} : IProps ) => {
    const showAllHandler = (e) => {
        e.preventDefault();
        setFilter({...filter, showAll: !filter.showAll});
    }

    return (
        <div>
            <form>
                <input type="text" value={filter.trainerName} onChange={(e) => setFilter({...filter, trainerName: e.target.value, showAll: false})} />
                <input type="checkbox" checked={filter.isActive} onChange={(e) => setFilter({...filter, isActive: e.target.checked,showAll: false})} />
                <input type="checkbox" checked={filter.forMan} onChange={(e) => setFilter({...filter, forMan: e.target.checked, showAll: false})} />
                <input type="checkbox" name = 'for woman' checked={filter.forWoman} onChange={(e) => setFilter({...filter, forWoman: e.target.checked, showAll: false})} />
                <button onClick={showAllHandler}>Показать всех</button>
            </form>
        </div>
    )
}