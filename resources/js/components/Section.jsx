export default function Section({ children, id }) {
    return (
        <section id={id}>
            <div className="content">
                { children }
            </div>
        </section>
    );
}