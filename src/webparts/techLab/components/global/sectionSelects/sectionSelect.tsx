import * as React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import Input from '@material-ui/core/Input';
import { FormattedMessage } from 'react-intl';
import * as moment from 'moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
//Aqui se ubican los estilos de la ventana de opciones cuando se despliega
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export const SectionSelect = ({
    technologies,
    items,
    setItems,
    pageType,
    service,
    setSelectedOption
}) => {


    const [numResults, setNumResults] = React.useState(0);

    const [checkedTecnology, setCheckedTecnology] = React.useState<string[]>([]);
    const [checkedYear, setCheckedYear] = React.useState<string[]>([]);
    const [checkedType, setCheckedType] = React.useState<string[]>([]);
    const [checkedStakeholders, setCheckedStakeholders] = React.useState<string[]>([]);
    const [checkedTrack, setCheckedTrack] = React.useState<string[]>([]);

    const [optionsYear, setOptionsYear] = React.useState([]);
    const [optionsType, setOptionsType] = React.useState([]);
    const [optionsStakeholders, setOptionsStakeholders] = React.useState([]);
    const [optionsTrack, setOptionsTrack] = React.useState([]);

    const [showSearch, setShowSearch] = React.useState(false);

    React.useEffect(() => {
        switch (pageType) {
            case 'resources':
                setOptionsYear(getYearsOption(items));
                setOptionsType(getTypeOption(items));
                break;

            case 'ourWork':
                setOptionsYear(getYearsOption(items));
                setOptionsType(getTypeOption(items));
                setOptionsStakeholders(getStakeholdersOption(items));
                setOptionsTrack(getTracksOption(items));
                break;
        }
    }, [items]);

    React.useEffect(() => {
        switch (pageType) {
            case 'ourWork':
                if (checkedTecnology.length > 0 || checkedYear.length > 0 || checkedType.length > 0 || checkedStakeholders.length > 0 || checkedTrack.length > 0) {
                    setShowSearch(true);
                    service.getProjectsParams(checkedTecnology, checkedYear, checkedType, checkedStakeholders, checkedTrack, technologies).then((data) => {
                        setItems(data.data.value);
                        setNumResults(data.data.value.length);
                        setSelectedOption(true);
                    });
                } else {
                    setShowSearch(false);
                    setItems([]);
                    setSelectedOption(false);
                }
                break;
            case 'resources':
                if (checkedTecnology.length > 0 || checkedYear.length > 0 || checkedType.length > 0) {
                    setShowSearch(true);
                    service.getResourcesParams(checkedTecnology, checkedYear, checkedType, technologies).then((data) => {
                        setItems(data.data.value);
                        setNumResults(data.data.value.length);
                        setSelectedOption(true);
                    });
                } else { 
                    setShowSearch(false);
                    setItems([]);
                    setSelectedOption(false);
                }
        }
    }, [checkedTecnology, checkedYear, checkedType, checkedStakeholders, checkedTrack]);

    const getYearsOption = (itemArray) => {
        let arrayDate = [];
        let dates = [];

        pageType == 'ourWork' ?
            arrayDate = itemArray.map(({ CompletedDate }) => {
                return (
                    !(moment(CompletedDate).format('YYYY') === 'Invalid date') ?
                        moment(CompletedDate).format('YYYY')
                        :
                        'Not date'
                );
            })
            :
            arrayDate = itemArray.map(({ AddedDate }) => {
                return (
                    !(moment(AddedDate).format('YYYY') === 'Invalid date') ?
                        moment(AddedDate).format('YYYY')
                        :
                        'Not date'
                );
            });


        arrayDate.forEach((element, index) => {
            if (index === arrayDate.indexOf(element) && element !== 'Not date') {
                dates = [...dates, parseInt(element)];
            }
        });

        return dates.sort(
            (a, b) => { return a - b; }
        );
    };

    const getTypeOption = (itemArray) => {
        let arrayType = [];
        let types = [];

        pageType == 'ourWork' ?
            arrayType = itemArray.map(({ ProjectType }) => {
                return (
                    ProjectType ?
                        ProjectType
                        :
                        'Not Type'
                );
            })
            :
            arrayType = itemArray.map(({ ResourceType }) => {
                return (
                    ResourceType ?
                        ResourceType
                        :
                        'Not Type'
                );
            });

        arrayType.forEach((element, index) => {
            if (index === arrayType.indexOf(element) && element !== 'Not Type') {
                types = [...types, element];
            }
        });

        return types;

    };

    const getStakeholdersOption = (itemArray) => {
        let arrayStakeholder = [];
        let arrayAll = [];
        let stakeholders = [];

        arrayStakeholder = itemArray.map(({ Stakeholders }) => {
            return (
                Stakeholders?.length > 3 ? Stakeholders.split('/') : Stakeholders
            );
        });
        arrayStakeholder.forEach((element) => {
            if (element !== null) {
                arrayAll = arrayAll.concat(element);
            }
        });
        arrayAll.forEach((element, index) => {
            if (index === arrayAll.indexOf(element)) {
                stakeholders = [...stakeholders, element];
            }
        });

        return stakeholders;

    };

    const getTracksOption = (itemArray) => {
        let arrayTrack = [];
        let tracks = [];

        arrayTrack = itemArray.map(({ Track }) => {
            return (
                Track ?
                    Track
                    :
                    'Not Track'
            );
        });
        arrayTrack.forEach((element, index) => {
            if (index === arrayTrack.indexOf(element) && element !== 'Not Type') {
                tracks = [...tracks, element];
            }
        });

        return tracks;
    };

    const handleChangeTecnology = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCheckedTecnology(event.target.value as string[]);
    };

    const handleChangeYear = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCheckedYear(event.target.value as string[]);
    };

    const handleChangeType = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCheckedType(event.target.value as string[]);
    };

    const handleChangeStakeholders = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCheckedStakeholders(event.target.value as string[]);
    };

    const handleChangeTracks = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCheckedTrack(event.target.value as string[]);
    };

    return (
        <>
            <div className='sectionTitle'>
                <h1>
                    <FormattedMessage id={'ourwork.filter.title'} />
                </h1>
                <div className='sectionSelects'>

                    {
                        // Tecnologias
                        pageType == 'ourWork' || pageType == 'resources' || pageType == 'solutions' ?

                            <FormControl className='select'>
                                <InputLabel htmlFor="grouped-native-select" className='titleSelect' id="demo-mutiple-checkbox-label">
                                    <FormattedMessage id={'filter.blobal.item1'} />
                                </InputLabel>
                                <Select
                                    labelId="demo-mutiple-checkbox-label"
                                    id="demo-mutiple-checkbox"
                                    multiple
                                    value={checkedTecnology}
                                    onChange={handleChangeTecnology}
                                    input={<Input />}
                                    renderValue={(selected) => (selected as string[]).join(', ')}
                                    MenuProps={MenuProps}
                                    style={{ width: '100%', height: '55px', marginTop: '0px' }}
                                >
                                    {technologies?.map((item, i) => (
                                        <MenuItem key={i} value={item.Title}>
                                            <Checkbox checked={checkedTecnology.indexOf(item.Title) > -1} />
                                            <ListItemText primary={item.Title} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            :
                            null
                    }

                    {
                        // Año
                        pageType == 'ourWork' || pageType == 'resources' ?
                            <FormControl className='select'>
                                <InputLabel htmlFor="grouped-native-select" className='titleSelect' id="demo-mutiple-checkbox-label">
                                    <FormattedMessage id={'filter.blobal.item2'} />
                                </InputLabel>
                                <Select
                                    labelId="demo-mutiple-checkbox-label"
                                    id="demo-mutiple-checkbox"
                                    multiple
                                    value={checkedYear}
                                    onChange={handleChangeYear}
                                    input={<Input />}
                                    renderValue={(selected) => (selected as string[]).join(', ')}
                                    MenuProps={MenuProps}
                                    style={{ width: '100%', height: '55px', marginTop: '0px' }}
                                >
                                    {optionsYear?.map((item, i) => (
                                        <MenuItem key={i} value={item}>
                                            <Checkbox checked={checkedYear.indexOf(item) > -1} />
                                            <ListItemText primary={item} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            :
                            null
                    }


                    {
                        // Tipo
                        pageType == 'ourWork' || pageType == 'resources' ?
                            <FormControl className='select'>
                                <InputLabel htmlFor="grouped-native-select" className='titleSelect' id="demo-mutiple-checkbox-label">
                                    <FormattedMessage id={'filter.blobal.item3'} />
                                </InputLabel>
                                <Select
                                    labelId="demo-mutiple-checkbox-label"
                                    id="demo-mutiple-checkbox"
                                    multiple
                                    value={checkedType}
                                    onChange={handleChangeType}
                                    input={<Input />}
                                    renderValue={(selected) => (selected as string[]).join(', ')}
                                    MenuProps={MenuProps}
                                    style={{ width: '100%', height: '55px', marginTop: '0px' }}
                                >
                                    {optionsType.map((item, i) => (
                                        <MenuItem key={i} value={item}>
                                            <Checkbox checked={checkedType.indexOf(item) > -1} />
                                            <ListItemText primary={item} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            :
                            null
                    }


                    {
                        // Stakeholders
                        pageType == 'ourWork' ?
                            <FormControl className='select'>
                                <InputLabel htmlFor="grouped-native-select" className='titleSelect' id="demo-mutiple-checkbox-label">
                                    <FormattedMessage id={'filter.blobal.item4'} />
                                </InputLabel>
                                <Select
                                    labelId="demo-mutiple-checkbox-label"
                                    id="demo-mutiple-checkbox"
                                    multiple
                                    value={checkedStakeholders}
                                    onChange={handleChangeStakeholders}
                                    input={<Input />}
                                    renderValue={(selected) => (selected as string[]).join(', ')}
                                    MenuProps={MenuProps}
                                    style={{ width: '100%', height: '55px', marginTop: '0px' }}
                                >
                                    {optionsStakeholders.map((item, i) => (
                                        <MenuItem key={i} value={item}>
                                            <Checkbox checked={checkedStakeholders.indexOf(item) > -1} />
                                            <ListItemText primary={item} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            :
                            null
                    }


                    {
                        // Track
                        pageType == 'ourWork' ?
                            <FormControl className='select'>
                                <InputLabel htmlFor="grouped-native-select" className='titleSelect' id="demo-mutiple-checkbox-label">
                                    <FormattedMessage id={'filter.blobal.item5'} />
                                </InputLabel>
                                <Select
                                    labelId="demo-mutiple-checkbox-label"
                                    id="demo-mutiple-checkbox"
                                    multiple
                                    value={checkedTrack}
                                    onChange={handleChangeTracks}
                                    input={<Input />}
                                    renderValue={(selected) => (selected as string[]).join(', ')}
                                    MenuProps={MenuProps}
                                    style={{ width: '100%', height: '55px', marginTop: '0px' }}
                                >
                                    {optionsTrack.map((item, i) => (
                                        <MenuItem key={i} value={item}>
                                            <Checkbox checked={checkedTrack.indexOf(item) > -1} />
                                            <ListItemText primary={item} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            :
                            null
                    }



                </div>
            </div>
            {
                showSearch ?
                    <div className='selectedOption container'>
                        <div>
                            <p className='textResult'>{numResults} { numResults == 1? 'Resultado' : 'Resultados' }</p> 
                            <FontAwesomeIcon icon={faTimes} className='iconCancel' onClick={() => {
                                setCheckedTecnology([]);
                                setCheckedYear([]);
                                setCheckedType([]);
                                setCheckedStakeholders([]);
                                setCheckedTrack([]);
                                setShowSearch(false);
                                setItems([]);
                                setSelectedOption(false);
                            }}/>
                        </div>
                        <p>{checkedTecnology.concat(checkedYear, checkedType, checkedStakeholders, checkedTrack).join(' + ')}</p>
                    </div>
                    :
                    null
            }

        </>

    );
};
