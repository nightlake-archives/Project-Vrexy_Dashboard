export default function MobilePopover(props) {
    return (<>
        {props.arr.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base font-medium text-gray-900 hover:text-gray-700"
            >
              {item.name}
            </a>
        ))}</>
    )
}