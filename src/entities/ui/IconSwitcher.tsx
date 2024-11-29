import O from "../../shared/assets/icons/components/o.tsx";
import X from "../../shared/assets/icons/components/x.tsx";

interface IconSwitcherProps {
    caseStr: string;
    size: number;
}

const IconSwitcher = (props: IconSwitcherProps) => {
    const { caseStr, size } = props;
    if (caseStr === '0') {
        return <O width={size * 0.9} height={size * 0.9}/>
    } else {
        return (<X width={size} height={size}/>)
    }
};

export default IconSwitcher;